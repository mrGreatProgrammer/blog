import React from "react";
import { useDispatch } from "react-redux";
import { disLikePost, likePost } from "../../../redux/thunk/posts-thunk";

function Like({ id, likes, liked }) {
  const dispatch = useDispatch();
  return (
    <div className="post__like">
      {liked ? (
        <button
          className="post__btn--like btn__dislike"
          onClick={() => {
            dispatch(disLikePost(id, likes));
          }}
        >
          <i className="fas fa-heart"></i>
          <span>{likes}</span>
        </button>
      ) : (
        <button
          className="post__btn--like btn__like"
          onClick={() => {
            dispatch(likePost(id, likes));
          }}
        >
          <i className="far fa-heart"></i>

          <span>{likes}</span>
        </button>
      )}
      {/*         
      <button className="post_like--btn">like</button>{" "}
      <span className="post__likes--count"> {likes} </span> */}
    </div>
  );
}

export default Like;
