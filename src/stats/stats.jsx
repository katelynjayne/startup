import React from 'react';

import { Comments } from './comments';
import { useLocation } from "react-router-dom";

function generateGraph() {
  const img_link = "example_graph.png"
  try {
    return <img src={img_link} width="50%"></img>
  }
  catch {
    return <p>Sorry, we had a problem rendering your graph. :(</p>
  }
}

export function Stats(props) {
  const location = useLocation();
  const { state } = location;
  console.log(location.state)
  console.log(state.data)

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