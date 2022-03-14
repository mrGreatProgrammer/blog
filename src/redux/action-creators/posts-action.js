export const GET_POSTS = "GET_POSTS";
export const TOGGLE_IS_FETCHING_POSTS = "TOGGLE_IS_FETCHING_POSTS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_POSTS_COUNT = "SET_TOTAL_POSTS_COUNT";
export const SHOW_MODAL_WINDOW = "SHOW_MODAL_WINDOW";
export const HIDE_MODAL_WINDOW = "HIDE_MODAL_WINDOW";
export const LIKE_POST = "LIKE_POST";
export const DIS_LIKE = "DIS_LIKE";
export const FILTER_POSTS_BY_DATE = "FILTER_POSTS_BY_DATE";
export const FILTER_POSTS_BY_ALPHABET = "FILTER_POSTS_BY_ALPHABET";

// ACTION CREATORS
export const getPostsAC = (posts, photoInfo) => ({
  type: GET_POSTS,
  posts,
  photoInfo,
});
export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING_POSTS,
  isFetching,
});
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalPostsCountAC = (totalPostsCount) => ({
  type: SET_TOTAL_POSTS_COUNT,
  totalPostsCount,
});
export const showModalWindowAC = (postId, postData, photo) => ({
  type: SHOW_MODAL_WINDOW,
  postId,
  postData,
  photo,
});
export const hideModalWindowAC = (postId) => ({
  type: HIDE_MODAL_WINDOW,
  postId,
});

export const likePostAC = (postId, likes) => ({
  type: LIKE_POST,
  postId,
  likes: likes+=1,
});
export const disLikePostAC = (postId, likes) => ({
  type: DIS_LIKE,
  postId,
  likes,
});
export const filterByDateAC = (filterByDate) => ({
  type: FILTER_POSTS_BY_DATE,
  filterByDate,
});
export const filterByAlphabetAC = (filterByAlphabet) => ({
  type: FILTER_POSTS_BY_ALPHABET,
  filterByAlphabet,
});
