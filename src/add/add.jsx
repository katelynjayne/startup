import React from 'react';

export function Add(props) {
    const [date, setDate] = React.useState();
    const [distance, setDist] = React.useState();
    const [hours, setHrs] = React.useState();
    const [minutes, setMins] = React.useState();
    const [seconds, setSecs] = React.useState();
    const [type, setType] = React.useState("workout");

    function storeRun() {
        let userData = [];
        let newData = {date: date, distance: distance, hours: hours, minutes: minutes, seconds: seconds, type: type};
        const userDataJson = localStorage.getItem(`${props.userName}Runs`);
        if (userDataJson) {
            userData = JSON.parse(userDataJson);
        }
        if (userData.length) {
            for (const [i, item] of userData.entries()) {
                if (item.date > newData.date) {
                    userData.splice(i, 0, newData);
                    break;
                }
            }
        } else {
            userData.push(newData);
        }
        localStorage.setItem(`${props.userName}Runs`, JSON.stringify(userData));
    }

  return (
    <main>
       <h2>ADD RUN</h2>
    <form method="get" action="stats">
        <div>
            <label>Date: </label>
            <input type="date" id="date" className="form-control custom-input" onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div>
            <label>Distance: </label>
            <input type="number" placeholder="in miles" id="distance" className="form-control custom-input" min="0.01" step="0.01" onChange={(e) => setDist(e.target.value)}/>
        </div>
        <div>
            <label>Hours: </label>
            <input type="number" id="hours" className="form-control custom-input custom-time" min="0" onChange={(e) => setHrs(e.target.value)}/>
            <label>Minutes: </label>
            <input type="number" id="minutes" className="form-control custom-input custom-time" min="0" onChange={(e) => setMins(e.target.value)}/>
            <label>Seconds: </label>
            <input type="number" id="seconds" className="form-control custom-input custom-time" min="0" onChange={(e) => setSecs(e.target.value)}/>
        </div>
        <div>
            <label>Type: </label>
            <select id="type" className="form-select" defaultValue="workout" onChange={(e) => setType(e.target.value)} >
                <option>workout</option>
                <option>race</option>
            </select>
        </div>
        <br />
        <button type="submit" className="btn custom-btn" onClick = {() => storeRun()} disabled={!date || !distance || !hours || !minutes || !seconds}>ADD RUN!</button>
    </form> 
    </main>
  );
}