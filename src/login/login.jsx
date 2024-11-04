import React from 'react';

export function Login() {
  return (
    <main>
      <h2>LOGIN</h2>
      <form method="get" action="runs">
        <div>
          <input type="text" placeholder="username" className="form-control custom-input" />
        </div>
        <div>
          <input type="password" placeholder="password" className="form-control custom-input" />
        </div>
        <button type="submit" className="btn custom-btn">Login</button>
        <button type="submit" className="btn custom-btn">Create New Account</button>
      </form>
    </main>
  );
}