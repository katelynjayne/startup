import React from 'react';

import { useNavigate } from 'react-router-dom';

export function Add(props) {
    const [date, setDate] = React.useState();
    const [distance, setDist] = React.useState();
    const [hours, setHrs] = React.useState();
    const [minutes, setMins] = React.useState();
    const [seconds, setSecs] = React.useState();
    const [type, setType] = React.useState("workout");
    const [userData, setUserData] = React.useState([]);
    const navigate = useNavigate();

    function calculatePace(hr, min, sec, mi) {
        // Convert total time to seconds
        const totalSeconds = parseInt(hr,10) * 3600 + parseInt(min,10) * 60 + parseInt(sec,10);
        
        // Calculate pace in seconds per mile
        const paceSeconds = totalSeconds / mi;
        
        // Convert pace to minutes and seconds per mile
        const paceMinutes = Math.floor(paceSeconds / 60);
        const paceRemainingSeconds = Math.round(paceSeconds % 60);
        
        // Format seconds to always be two digits for consistency
        const formattedSeconds = paceRemainingSeconds.toString().padStart(2, '0');
        
        // Return the pace as a string in "{minutes}:{seconds}/mi" format
        return `${paceMinutes}:${formattedSeconds}/mi`;
      }

    async function storeRun() {
        let newData = {date: date, distance: distance, hours: hours, minutes: minutes, seconds: seconds, type: type, pace: calculatePace(hours,minutes,seconds,distance)};
        const userDataJson = localStorage.getItem(`${props.userName}Runs`);
        if (userDataJson) {
            setUserData(JSON.parse(userDataJson));
        }
        let found = false;
        if (userData.length) {
            for (const [i, item] of userData.entries()) {
                if (item.date < newData.date) {
                    userData.splice(i, 0, newData);
                    found = true;
                    break;
                }
            }
        } 
        if (!found){
            userData.push(newData);
        }
        localStorage.setItem(`${props.userName}Runs`, JSON.stringify(userData));
        return newData;
    }

    async function handleAndGo(event) {
        event.preventDefault()
        const runData = await storeRun();
        console.log(runData)
        navigate('/stats', { state: { data: runData } });
    }

  return (
    <main>
       <h2>ADD RUN</h2>
    {/* <form method="get"> */}
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
            <input type="number" id="minutes" className="form-control custom-input custom-time" min="0" max="59" onChange={(e) => setMins(e.target.value)}/>
            <label>Seconds: </label>
            <input type="number" id="seconds" className="form-control custom-input custom-time" min="0" max="59" onChange={(e) => setSecs(e.target.value)}/>
        </div>
        <div>
            <label>Type: </label>
            <select id="type" className="form-select" defaultValue="workout" onChange={(e) => setType(e.target.value)} >
                <option>workout</option>
                <option>race</option>
            </select>
        </div>
        <br />
        <button className="btn custom-btn" onClick = {(e) => handleAndGo(e)} disabled={!date || !distance || !hours || !minutes || !seconds}>ADD RUN!</button>
    {/* </form>  */}
    </main>
  );
}