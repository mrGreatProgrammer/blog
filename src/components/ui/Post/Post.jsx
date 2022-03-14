import React from "react";
import { NavLink } from "react-router-dom";
import Like from "../Like/Like";
import ModalWindow from "../ModalWindow/ModalWindow";
import "./Post.css";

function Post({ getOnePost, post }) {
  const showModal = (postId) => {
    getOnePost(postId);
  };

  return (
    <div className="post">
      {post.isModalVisible ? (
        <ModalWindow
          info={post.info}
          post={post}
          // info={props.info} isModalVisible={props.isModalVisible}
        />
      ) : (
        <></>
      )}
      <div className="post__avatar">{post.id}</div>
      <div className="post__content">
        <h3 className="card-title title">{post.title}</h3>

        <button
          className="btn btn-info btn-showmore"
          onClick={() => showModal(post.id)}
        >
          show more...
        </button>
      </div>
      <div className="post__btns">
        <Like likes={post.likes} liked={post.liked} id={post.id} />
        <div className="post__comments--btn">
          <NavLink to={`/posts/${post.id}/comments`}>
            <i className="fas fa-comment"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Post;
