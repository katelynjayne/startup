import React from "react";

import { Notifier } from "./notifier";

export function Comments() {
    const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    Notifier.addHandler(handleGameEvent);

    return () => {
      Notifier.removeHandler(handleGameEvent);
    };
  });

  function handleGameEvent(event) {
    let newEvents = [event, ...events];
    if (newEvents.length > 10) {
      newEvents = newEvents.slice(1, 10);
    }
    setEvent(newEvents);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      messageArray.push(
        <div key={i}>
          <span style={{ fontWeight: "bold" }}>{event.from}</span>: {event.value}
        </div>
      );
    }
    return messageArray;
  }
    return (
        <div className="comment-section">
            <h3>💬 COMMENTS</h3>
            {createMessageArray()}
            <input type="text" className="form-control custom-input" placeholder="Add a comment..." />
        </div>
    )
}