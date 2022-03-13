import React, { Component } from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { getPosts, getOnePost } from "../../redux/thunk/posts-thunk";
import { setCurrentPageAC } from "../../redux/action-creators/posts-action";
import Loader from "../Loader/Loader";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.getPosts(1, this.props.pageSize, this.props.filterBy);
  }

  onPageChanged = (pageNum) => {
    this.props.getPosts(pageNum, this.props.pageSize, this.props.filterBy);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : <></>}
        <Posts
          onPageChanged={this.onPageChanged}
          totalPostsCount={this.props.totalPostsCount}
          posts={this.props.posts}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          info={this.props.info}
          isModalVisible={this.props.isModalVisible}
          getOnePost={this.props.getOnePost}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    isFetching: state.posts.isFetching,
    currentPage: state.posts.currentPage,
    pageSize: state.posts.pageSize,
    totalPostsCount: state.posts.totalPostsCount,
    filterBy: state.posts.filterBy,
  };
};

export default connect(mapStateToProps, {
  getPosts,
  setCurrentPageAC,
  getOnePost,
})(PostsContainer);
