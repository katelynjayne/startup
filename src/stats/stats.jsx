import React from 'react';

import { Comments } from './comments';

function generateGraph() {
  const img_link = "example_graph.png"
  try {
    return <img src={img_link} width="50%"></img>
  }
  catch {
    return <p>Sorry, we had a problem rendering your graph. :(</p>
  }
}

export function Stats() {
  return (
    <main>
      <table>
        <tr class="header-row">
          <th>Date</th>
          <th>Distance</th>
          <th>Time</th>
          <th>Avg Pace</th>
          <th>Type</th>
        </tr>
        <tr>
          <td>9/23/24</td>
          <td>3.30 mi</td>
          <td>28:48</td>
          <td>8:43/mi</td>
          <td>workout</td>
        </tr>
    </table>
    {generateGraph()}
    <Comments/>
    </main>
  );
}