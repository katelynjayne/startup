import React from 'react';

export function Add() {
  return (
    <main>
       <h2>ADD RUN</h2>
    <form method="get" action="stats">
        <div>
            <label for="date">Date: </label>
            <input type="date" id="date" className="form-control custom-input"/>
        </div>
        <div>
            <label for="distance">Distance: </label>
            <input type="number" placeholder="in miles" id="distance" className="form-control custom-input"/>
        </div>
        <div>
            <label for="hours">Hours: </label>
            <input type="number" id="hours" className="form-control custom-input custom-time"/>
            <label for="minutes">Minutes: </label>
            <input type="number" id="minutes" className="form-control custom-input custom-time"/>
            <label for="seconds">Seconds: </label>
            <input type="number" id="seconds" className="form-control custom-input custom-time"/>
        </div>
        <div>
            <label for="type">Type: </label>
            <select id="type" className="form-select">
                <option selected>workout</option>
                <option>race</option>
            </select>
        </div>
        <br />
        <button type="submit" className="btn custom-btn">ADD RUN!</button>
    </form> 
    </main>
  );
}