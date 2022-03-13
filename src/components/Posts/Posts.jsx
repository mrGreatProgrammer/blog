import React, { useMemo } from "react";
import Paginator from "../ui/Paginator/Paginator";
import Post from "../ui/Post/Post";
import "./Posts.css";

function Posts(props) {
  return (
    <div className="posts">
      {props.posts.map((p, i) => (
        <Post key={i} post={p} getOnePost={props.getOnePost} />
      ))}
      <Paginator
        totalPostsCount={props.totalPostsCount}
        currentPage={props.currentPage}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
      />
    </div>
  );
}

export default Posts;
