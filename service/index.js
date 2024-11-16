const express = require('express');
const uuid = require('uuid');
const app = express();
app.use(express.json());

const port = process.argv.length > 2 ? process.argv[2] : 4000;

let users = {}
let runs = {}

var apiRouter = express.Router();
app.use(`/api`, apiRouter);
app.use(express.static('public'));

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    const user = users[req.body.username];
    if (user) {
      res.status(409).send({ msg: 'Username taken' });
    } else {
      const user = { username: req.body.username, password: req.body.password, token: uuid.v4() };
      users[user.username] = user;
      runs[user.username] = [];
  
      res.send({ token: user.token });
    }
  });
  
  // GetAuth login an existing user
  apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.username];
    if (user) {
      if (req.body.password === user.password) {
        user.token = uuid.v4();
        res.send({ token: user.token });
        return;
      }
    }
    res.status(401).send({ msg: 'Wrong username or password' });
  });
  
  // DeleteAuth logout a user
  apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
      delete user.token;
    }
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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});