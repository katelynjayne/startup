import React from 'react';

import Button from 'react-bootstrap/Button';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <>
    <h2>LOGIN</h2>
      <form method="get" action="runs" className="login-box">
        <div>
          <input type="text" placeholder="username" className="form-control custom-input" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="password" className="form-control custom-input" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn custom-btn" onClick={() => loginUser()} disabled={!userName || !password}>Login</button>
        <button type="submit" className="btn custom-btn" onClick={() => createUser()} disabled={!userName || !password}>Create New Account</button>
      </form>
    </>
  );
}