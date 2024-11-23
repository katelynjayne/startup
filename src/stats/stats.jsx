import React from 'react';

import { Comments } from './comments';
import { useLocation } from "react-router-dom";

function paceStringConversion(paceStr) {
    let pieces = paceStr.split(":")
    let seconds = parseFloat(pieces[1].substring(0,2));
    return (parseInt(pieces[0]) + (seconds/60)).toString();
}

async function generateGraph() {
    const allDataJson = await fetch('api/runs');
    const allData = allDataJson.json();
    if (allData.length <= 2) {
        return (<p>Add more runs to see your pace graph!</p>);
    } else {
        let paces = ""
        let dates = "|"
        for (let run of allData.slice(0,10).reverse()) {
            paces += paceStringConversion(run.pace) + ","
            let datePieces = run.date.split('-')
            dates += datePieces[1]+'/'+datePieces[2] + "|"
        }
        paces = paces.substring(0, paces.length-1)
        console.log(paces)
        const [success, setSuccess] = React.useState(false);
        const graphLink = `https://image-charts.com/chart?cht=ls&chd=t:${paces}&chs=800x500&chco=606445&chls=5&chxt=x&chxl=0:${dates}&chg=1&chf=bg,s,F3C79E&chtt=Average+Pace+of+Recent+Runs&chts=606445,30`
        fetch(graphLink)
            .then(() => setSuccess(true))
            .catch(() => setSuccess(false));
        if (success) {
            return <img src={graphLink} width="75%"></img>;
        } else {
            return (<p>Sorry, we had a problem rendering your graph. :(</p>);
        }
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
            {generateGraph()}
            <Comments userName = {props.userName}/>
        </main>
    );
}