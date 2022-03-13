import React from "react";
import "./Comment.css";

function Comment({ id, userName, text, email }) {
  return (
    <div className="comment">
      {id}
      <div className="user__info">
        <h6 className="user__info--name"> {userName} </h6>{" "}
        <p className="user__info--email"> {email} </p>
      </div>
      <div className="comment__txt">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Comment;
