import React from "react";

import { Notifier } from "./notifier";

export function Comments(props) {
    const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    Notifier.addHandler(handleGameEvent);

    return () => {
      Notifier.removeHandler(handleGameEvent);
    };
  });

  function handleGameEvent(event) {
    let newEvents = [...events, event];
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

  function sendComment(comment) {
    Notifier.broadcastEvent(props.userName, comment)
  }

    return (
        <div className="comment-section" style = {{}}>
            <h3>💬 COMMENTS</h3>
            <div style = {{overflowY: "auto", height: "110px"}}>
                {createMessageArray()}
            </div>
            <input type="text" className="form-control custom-input" placeholder="Add a comment..." 
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    sendComment(e.target.value);
                    e.target.value = ""
                }}}
            />
        </div>
    )
}