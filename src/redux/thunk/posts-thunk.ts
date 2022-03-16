import { Dispatch } from "react";
import postsAPI from "../../api/posts-api";
import {
  disLikePostAC,
  filterByAlphabetAC,
  filterByDateAC,
  getPostsAC,
  likePostAC,
  setCurrentPageAC,
  setTotalPostsCountAC,
  showModalWindowAC,
  toggleIsFetchingAC,
} from "../action-creators/posts-action";
import { filterType, postId, PostsActions } from "../types/posts-reducer";

// THUNK
export const getPosts = (page: number, limit: number, filterValue: filterType) => async (dispatch: Dispatch<PostsActions>) => {
  dispatch(toggleIsFetchingAC(true));
  await postsAPI.getPosts().then(async (response) => {
    if (filterValue === "date") {
      let posts = response.data;
      dispatch(filterByDateAC(filterValue));
      const filterResult = posts.sort((a:any, b: any) => (a.id > b.id ? -1 : 1));
      dispatch(getPostsAC(filterResult));
    } else if (filterValue === "al") {
      let posts = response.data;
      const filterResult = posts.sort((a: any, b: any) => a.title.localeCompare(b.title));
      dispatch(filterByAlphabetAC(filterValue));
      dispatch(getPostsAC(filterResult));
    }
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedPosts = response.data.slice(startIndex, endIndex);

    dispatch(getPostsAC(paginatedPosts, []));

    dispatch(setCurrentPageAC(page));
    dispatch(setTotalPostsCountAC(response.data.length));
    dispatch(toggleIsFetchingAC(false));
  });
};

export const getOnePost = (postId: postId) => async (dispatch: Dispatch<PostsActions>) => {
  dispatch(toggleIsFetchingAC(true));
  await postsAPI.getOnePost(postId).then(async (response) => {
    await postsAPI.getOnePhoto(postId).then((res) => {
      dispatch(showModalWindowAC(postId, response.data, res.data));
    });
    dispatch(toggleIsFetchingAC(false));
  });
};

export const search = (searchInput: string) => async (dispatch: Dispatch<PostsActions>) => {
  await postsAPI.getPosts().then((response) => {
    const searchResult = response.data.filter((s: any) =>
      s.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    dispatch(getPostsAC(searchResult));
  });
};

export const likePost = (postId: postId, likes: number) => (dispatch: Dispatch<PostsActions>) => {
  dispatch(likePostAC(postId, likes));
};

export const disLikePost = (postId: postId, likes: number) => (dispatch: Dispatch<PostsActions>) => {
  dispatch(disLikePostAC(postId, likes));
};
