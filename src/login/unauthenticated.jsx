import React from 'react';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState('');

    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
    }

    async function createUser() {
        loginOrCreate(`/api/auth/create`);
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ username: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }
    
    return (
        <>
            <h2>LOGIN</h2>
            <div className="login-box">
                <div>
                    <input type="text" placeholder="username" className="form-control custom-input" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div>
                    <input type="password" placeholder="password" className="form-control custom-input" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn custom-btn" onClick={() => loginUser()} disabled={!userName || !password}>Login</button>
                <button type="submit" className="btn custom-btn" onClick={() => createUser()} disabled={!userName || !password}>Create New Account</button>
                {displayError && <p>{displayError}</p>}
            </div>
        </>
    );
}