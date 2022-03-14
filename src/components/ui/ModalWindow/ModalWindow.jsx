import React from "react";
import { useDispatch } from "react-redux";
import { hideModalWindowAC } from "../../../redux/action-creators/posts-action";
import "./ModalWindow.css";

function ModalWindow({ post, info }) {
  const dispatch = useDispatch();

  return (
    <div
      className="container--glassmorfism"
      onClick={() => dispatch(hideModalWindowAC(post.id))}
    >
      <div className="modal__window" onClick={(e) => e.stopPropagation()}>
        <div>
          <button
            onClick={() => dispatch(hideModalWindowAC(post.id))}
            className="btn-danger btn-close btn-dange modal__window--exit_btn"
          ></button>
        </div>
        <h3> {post.title} </h3>
        <div className="modal__window--imgs-container">
          {info.map((img) => (
            <img
              key={img.id}
              src={img.thumbnailUrl}
              alt=""
              className="modal__window--img"
            />
          ))}
        </div>
        <div className="post__content--txt">{post.textContent}</div>
      </div>
    </div>
  );
}

export default ModalWindow;
