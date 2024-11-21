const express = require('express');
const uuid = require('uuid');
const app = express();
app.use(express.json());
const DB = require('./database.js');
const bcrypt = require('bcrypt');

const port = process.argv.length > 2 ? process.argv[2] : 4000;

let users = {}
let runs = {}

var apiRouter = express.Router();
app.use(`/api`, apiRouter);
app.use(express.static('public'));

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
            res.send()
        } else {
            res.status(401).send({ msg: 'Incorrect password.' });
        }
    } else {
        res.status(401).send({ msg: 'Username not recognized.' });
    }
});
  
// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
    res.clearCookie("token");
    res.status(204).end();
});

  // GetRuns
apiRouter.get('/runs', (_req, res) => {
    res.send(runs);
  });

  function storeRun(newRun, username) {
    userData = runs[username];
    let found = false;
    
    if (userData) {
        for (const [i, item] of userData.entries()) {
            if (item.date < newRun.date) {
                userData.splice(i, 0, newRun);
                found = true;
                break;
            }
        }
        if (!found) {
        userData.push(newRun);
    }
    } 
    else {
      runs[username] = [newRun]
    }
    runs[username] = userData;
    return userData;
}
  // AddRun
  apiRouter.post('/run', (req, res) => {
    userRuns = storeRun(req.body.newRun, req.body.username);
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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});