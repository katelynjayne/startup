import React from 'react';

export function Stats() {
  return (
    <main>
      <table style="width:100%; text-align: center;">
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
    <img src="example_graph.png" width="50%"></img>
    <div class="comment-section">
      <p>💬 COMMENTS</p>
    <p>user1: Great work!</p>
    <p>user2: ur so fast</p>
    </div>
    </main>
  );
}