import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Search } from './search';

export function Runs(props) {
    const [data, setData] = React.useState([]);
    const [allData, setAllData] = React.useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const userName = location.state?.userName || props.userName;

    React.useEffect(() => {
        fetch('api/runs')
            .then((response) => {
                if (response.status === 401) {
                    return Promise.reject("Unauthorized");
                }
                return response.json();
            })
            .then((runs) => {
                setData(runs);
                setAllData(runs);
            })
            .catch(() => {
                setData(-1);
            });
    }, []);

    
    const dataRows = [];
    if (data === -1) {
        dataRows.push(
            <tr key='0'>
                <td colSpan='6'>Log in to start adding runs!</td>
            </tr>
        );
    }
    else if (data.length) {
        for (const [i, row] of data.entries()) {
            dataRows.push(
                <tr key = {i}>
                    <td>{row.date}</td>
                    <td>{row.distance} mi</td>
                    <td>{(row.hours>0)?`${row.hours}:`:""}{row.minutes}:{(row.seconds.length == 1)?`0${row.seconds}`:row.seconds}</td>
                    <td>{row.pace}</td>
                    <td>{row.type}</td>
                    <td><NavLink to="/stats" className="see-more-link" state={{data:row, allData:data}}>. . .</NavLink></td>
                </tr>
            );
        }
    } else {
        dataRows.push(
            <tr key='0'>
                <td colSpan='6'>No runs added!</td>
            </tr>
        );
    }

    return (
        <main>
            <h2>{userName?`${userName.toUpperCase()}'S RUNS`:"YOUR RUNS"}</h2>
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

            {userName && <p className="table-info">To add more runs, <NavLink to="/add" className="see-more-link"> click here.</NavLink></p>}
            <Search runData={allData} />
            {userName != props.userName && <button className="btn custom-btn" onClick={()=>{navigate("/runs", {state: {userName: props.userName}})}}>Return to my runs</button>}

        </main>
    );
}