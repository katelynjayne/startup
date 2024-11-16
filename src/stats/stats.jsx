import React from 'react';

import { Comments } from './comments';
import { useLocation } from "react-router-dom";

function paceStringConversion(paceStr) {
    let seconds = parseFloat(paceStr.substring(2,4));
    return paceStr.substring(0,1) + '.' + (seconds/60).toString();
}

function generateGraph(allData) {
    console.log(allData)
    if (allData.length <= 2) {
        return (<p>Add more runs to see your pace graph!</p>);
    }
    const [success, setSuccess] = React.useState(false);
    const graphLink = "https://image-charts.com/chart?cht=ls&chd=t:8.4,11.17,10.35,10.28&chs=800x500&chco=606445&chls=5&chxt=x&chxl=0:|10/5|10/24|11/4|11/8|&chg=1&chf=bg,s,F3C79E"
    fetch(graphLink)
        .then(() => setSuccess(true))
        .catch((error) => console.log(error));
    if (success) {
        return <img src={graphLink} width="75%"></img>;
    } else {
        return (<p>Sorry, we had a problem rendering your graph. :(</p>);
    }
}

export function Stats(props) {
    const location = useLocation();
    const { state } = location;

    return (
        <main>
            <table>
                <thead>
                    <tr className="header-row">
                        <th>Date</th>
                        <th>Distance</th>
                        <th>Time</th>
                        <th>Avg Pace</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{state.data.date}</td>
                        <td>{state.data.distance} mi</td>
                        <td>{(state.data.hours>0)?`${state.data.hours}:`:""}{state.data.minutes}:{(state.data.seconds.length == 1)?`0${state.data.seconds}`:state.data.seconds}</td>
                        <td>{state.data.pace}</td>
                        <td>{state.data.type}</td>
                    </tr>
                </tbody>
            </table>
            {generateGraph(state.allData)}
            <Comments userName = {props.userName}/>
        </main>
    );
}