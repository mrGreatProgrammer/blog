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

// THUNK
export const getPosts = (page, limit, filterValue) => async (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  await postsAPI.getPosts().then(async (response) => {
    if (filterValue === "date") {
      let posts = response.data;
      dispatch(filterByDateAC(filterValue));
      const filterResult = posts.sort((a, b) => (a.id > b.id ? -1 : 1));
      dispatch(getPostsAC(filterResult));
    } else if (filterValue === "al") {
      let posts = response.data;
      const filterResult = posts.sort((a, b) => a.title.localeCompare(b.title));
      dispatch(filterByAlphabetAC(filterValue));
      dispatch(getPostsAC(filterResult));
    }
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedPosts = response.data.slice(startIndex, endIndex);

    dispatch(getPostsAC(paginatedPosts));

    dispatch(setCurrentPageAC(page));
    dispatch(setTotalPostsCountAC(response.data.length));
    dispatch(toggleIsFetchingAC(false));
  });
};

export const getOnePost = (postId) => async (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  await postsAPI.getOnePost(postId).then(async (response) => {
    await postsAPI.getOnePhoto(postId).then((res) => {
      dispatch(showModalWindowAC(postId, response.data, res.data));
    });
    dispatch(toggleIsFetchingAC(false));
  });
};

export const search = (searchInput) => async (dispatch) => {
  await postsAPI.getPosts().then((response) => {
    const searchResult = response.data.filter((s) =>
      s.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    dispatch(getPostsAC(searchResult, {}));
  });
};

export const likePost = (postId, likes) => (dispatch) => {
  dispatch(likePostAC(postId, likes));
};

export const disLikePost = (postId, likes) => (dispatch) => {
  dispatch(disLikePostAC(postId, likes));
};
