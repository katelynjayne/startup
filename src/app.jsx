import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className= "body">
        <header>
            <nav className="navbar">
                <menu className="navbar-nav">
                    <li className="nav-item"><a className="nav-link"href="login.html">Login</a></li>
                    <li className="nav-item"><a className="nav-link"href="newrun.html">Add Run</a></li>
                </menu>
            </nav>
                <h1>RUN DIARY</h1>

                <span className="secret">secret third thing</span>
                
        </header>

        <main>App components go here.</main>

        <footer>
            <div className="container-fluid">
                <span className="text-reset">Kate Hill</span>
                <br />
                <a className="text-reset" href="https://github.com/katelynjayne/startup">GitHub</a>
            </div>
        </footer>
    </div>
  );
}
