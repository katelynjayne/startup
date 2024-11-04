import React from 'react';

export function Runs() {
  return (
    <main>
      <h2>KATE'S RUNS</h2>
      <table style="width:100%; text-align: center;">
        <tr className="header-row">
          <th>Date</th>
          <th>Distance</th>
          <th>Time</th>
          <th>Avg Pace</th>
          <th>Type</th>
          <th>See More</th>
        </tr>
        <tr>
          <td>10/5/24</td>
          <td>13.1 mi</td>
          <td>1:49:56</td>
          <td>8:23/mi</td>
          <td>race</td>
          <td><a href="rundetails.html" className="see-more-link">. . .</a></td>
        </tr>
        <tr>
          <td>9/23/24</td>
          <td>3.30 mi</td>
          <td>28:48</td>
          <td>8:43/mi</td>
          <td>workout</td>
          <td><a href="rundetails.html" className="see-more-link">. . .</a></td>
        </tr>

        <tr>
          <td>9/21/24</td>
          <td>12.01 mi</td>
          <td>1:57:06</td>
          <td>9:45/mi</td>
          <td>workout</td>
          <td><a href="rundetails.html" className="see-more-link">. . .</a></td>
        </tr>

        <tr>
          <td>9/18/24</td>
          <td>4.31 mi</td>
          <td>40:06</td>
          <td>9:18/mi</td>
          <td>workout</td>
          <td><a href="rundetails.html" className="see-more-link">. . .</a></td>
        </tr>
      </table>


      <p className="table-info">To add more runs, <a href="newrun.html" className="see-more-link">click here.</a></p>
    </main>
  );
}