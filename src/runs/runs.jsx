import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Search } from './search';

export function Runs(props) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);  // Loading state
  const location = useLocation();

  const userName = location.state?.userName || props.userName;

  React.useEffect(() => {
    setTimeout(() => {
const runDataJson = localStorage.getItem(`${userName}Runs`)
    if (runDataJson) {
      setData(JSON.parse(runDataJson));
    }
    setLoading(false)
  },0)
  
  }, [userName]);

  const dataRows = [];
  if (data.length) {
    for (const [i, row] of data.entries()) {
      dataRows.push(
        <tr key = {i}>
          <td>{row.date}</td>
          <td>{row.distance} mi</td>
          <td>{(row.hours>0)?`${row.hours}:`:""}{row.minutes}:{(row.seconds.length == 1)?`0${row.seconds}`:row.seconds}</td>
          <td>{row.pace}</td>
          <td>{row.type}</td>
          <td><NavLink to="/stats" className="see-more-link" state={{data:row}}>. . .</NavLink></td>
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
      <h2>{userName.toUpperCase()}'S RUNS</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
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
      </table>)}


      <p className="table-info">To add more runs, <NavLink to="/add" className="see-more-link"> click here.</NavLink></p>
      <Search />

    </main>
  );
}