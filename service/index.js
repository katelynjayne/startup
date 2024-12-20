const express = require('express');
const app = express();
app.use(express.json());
const cookieParser = require('cookie-parser');
const DB = require('./database.js');
const bcrypt = require('bcrypt');
const { ws } = require('./ws.js')

const port = process.argv.length > 2 ? process.argv[2] : 4000;

var apiRouter = express.Router();
app.use(cookieParser());
app.use(`/api`, apiRouter);
app.use(express.static('public'));
// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.username)) {
        res.status(409).send({ msg: 'Username taken' });
    } else {
        let user = await DB.createUser(req.body.username, req.body.password);
        setAuthCookie(res, user.token);
        res.send();
    }
});
  
// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.username);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.token);
            res.send();
        } else {
            res.status(401).send({ msg: 'Incorrect password.' });
        }
    } else {
        res.status(401).send({ msg: 'Username not recognized.' });
    }
});
  
// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie("token");
    res.status(204).end();
});

//SEARCH
apiRouter.get('/search', async (req, res) => {
    const { username } = req.query;
    const runs = await DB.getRuns(username);
    res.send(runs);
});

const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
    const authToken = req.cookies["token"];
    const user = await DB.getUserByToken(authToken);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
});

// GetRuns
secureApiRouter.get('/runs', async (req, res) => {
    const authToken = req.cookies["token"];
    const user = await DB.getUserByToken(authToken);
    const runs = await DB.getRuns(user.username);
    res.send(runs);
});

// AddRun
secureApiRouter.post('/run', (req, res) => {
    userRuns = DB.addRun(req.body.newRun);
    res.send(userRuns);
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie("token", authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

ws(httpService);