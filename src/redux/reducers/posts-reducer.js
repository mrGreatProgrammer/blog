import {
  DIS_LIKE,
  FILTER_POSTS_BY_ALPHABET,
  FILTER_POSTS_BY_DATE,
  GET_POSTS,
  HIDE_MODAL_WINDOW,
  LIKE_POST,
  SET_CURRENT_PAGE,
  SET_TOTAL_POSTS_COUNT,
  SHOW_MODAL_WINDOW,
  TOGGLE_IS_FETCHING_POSTS,
} from "../action-creators/posts-action";

// post constructor
function post(userId, id, title, textContent, photo) {
  return {
    userId,
    id,
    title,
    textContent,
    liked: false,
    likes: 0,
    isModalVisible: false,
    photo: "",
    info: photo,
  };
}

// initialized a default state
let initialState = {
  currentPage: 1,
  pageSize: 10,
  posts: [],
  isFetching: false,
  totalPostsCount: 0,
  filterBy: "",
};

// REDUCER
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts.map((p) =>
          post(p.userId, p.id, p.title, p.body, action.photoInfo)
        ),
      };
    case TOGGLE_IS_FETCHING_POSTS:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_POSTS_COUNT:
      return {
        ...state,
        totalPostsCount: action.totalPostsCount,
      };
    case SHOW_MODAL_WINDOW:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.postId) {
            return { ...p, info: action.photo, isModalVisible: true };
          }
          return p;
        }),
      };
    case HIDE_MODAL_WINDOW:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.postId) {
            return { ...p, isModalVisible: false };
          }
          return p;
        }),
      };
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.postId) {
            return { ...p, liked: true, likes: action.likes };
          }
          return p;
        }),
      };
    case DIS_LIKE:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.postId) {
            return { ...p, liked: false, likes: action.likes };
          }
          return p;
        }),
      };
    case FILTER_POSTS_BY_DATE:
      return {
        ...state,
        filterBy: action.filterByDate,
      };
    case FILTER_POSTS_BY_ALPHABET:
      return {
        ...state,
        filterBy: action.filterByAlphabet,
      };
    default:
      return state;
  }
};

export default postsReducer;
