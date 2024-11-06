import React from "react";

export function Comments() {
    return (
        <div class="comment-section">
            <h3>💬 COMMENTS</h3>
            <p>user1: Great work!</p>
            <p>user2: ur so fast</p>
            <input type="text" className="form-control custom-input" placeholder="Add a comment..." />
        </div>
    )
}