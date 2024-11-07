import React from 'react';
import { NavLink } from 'react-router-dom';
export function Runs(props) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const runDataJson = localStorage.getItem(`${props.userName}Runs`)
    if (runDataJson) {
      setData(JSON.parse(runDataJson));
    }
  }, []);

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
  

  const dataRows = [];
  if (data.length) {
    for (const [i, row] of data.entries()) {
      dataRows.push(
        <tr key = {i}>
          <td>{row.date}</td>
          <td>{row.distance} mi</td>
          <td>{(row.hours>0)?`${row.hours}:`:""}{row.minutes}:{row.seconds}</td>
          <td>{calculatePace(row.hours,row.minutes,row.seconds,row.distance)}</td>
          <td>{row.type}</td>
          <td><NavLink to="/stats" className="see-more-link">. . .</NavLink></td>
        </tr>
      );
    }
  } else {
    dataRows.push(
      <tr key='0'>
        <td colSpan='6'>No runs added!</td>
      </tr>
    )
  }

  return (
    <main>
      <h2>{props.userName.toUpperCase()}'S RUNS</h2>
      <table>
        <thead>
          <tr className="header-row">
          <th>Date</th>
          <th>Distance</th>
          <th>Time</th>
          <th>Avg Pace</th>
          <th>Type</th>
          <th>See More</th>
        </tr>
        </thead>
        <tbody>
          {dataRows}
        </tbody>
      </table>


      <p className="table-info">To add more runs, <NavLink to="/add" className="see-more-link">click here.</NavLink></p>
    </main>
  );
}