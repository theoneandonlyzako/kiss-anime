import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3 className="title">{title}</h3>
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="new-card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${thought.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {thought.username}
              </Link>{" "}
              posted on {thought.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/thought/${thought._id}`}>
                <p>{thought.thoughtText}</p>
                <p className="mb-0" style={{ fontSize: '.8rem'}}>
                  Reactions: {thought.reactionCount}{" "}
                </p>
                <button className="reply-btn">{thought.reactionCount ? "View Replies" : "Reply"}</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
