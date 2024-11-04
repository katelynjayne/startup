import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Add } from './add/add';
import { Runs } from './runs/runs';
import { Stats } from './stats/stats';

export default function App() {
  return (
    <BrowserRouter>
    <div className= "body">
        <header>
            <nav className="navbar">
                <menu className="navbar-nav">
                    <li className="nav-item"><NavLink className="nav-link" to=''>Login</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link"to='/add'>Add Run</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to='/runs'>Runs</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link"to='/stats'>Stats</NavLink></li>
                </menu>
            </nav>
                <h1>RUN DIARY</h1>

                <span className="secret">secret third thing</span>
                
        </header>

        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/add' element={<Add />} />
            <Route path='/runs' element={<Runs />} />
            <Route path='/stats' element={<Stats />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
            <div className="container-fluid">
                <span className="text-reset">Kate Hill</span>
                <br />
                <a className="text-reset" href="https://github.com/katelynjayne/startup">GitHub</a>
            </div>
        </footer>
    </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main>404: Return to sender. Address unknown.</main>;
  }