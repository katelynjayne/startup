import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    props.onLogout();
  }

  return (
    <div>
      <h2 className='playerName'>{props.userName}</h2>
      <button className="btn custom-btn" onClick={() => navigate("/runs")}>My Runs</button>
      <button className="btn custom-btn" onClick={() => logout()}>Logout</button>
    </div>
  );
}
