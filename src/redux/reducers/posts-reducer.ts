import { IPostsState, PostsActions, PostsActionsType } from "../types/posts-reducer";


// post constructor
function post(userId: number, id: number, title: string | null, textContent: string | null, photo: any[]) {
  return {
    userId,
    id,
    title,
    textContent,
    liked: false,
    likes: 0,
    isModalVisible: false,
    info: photo,
  };
}

// initialized a default state
let initialState:IPostsState = {
  currentPage: 1,
  pageSize: 10,
  posts: [],
  isFetching: false,
  totalPostsCount: 0,
  filterBy: "",
};

// REDUCER
const postsReducer = (state = initialState, action: PostsActions): IPostsState => {
  switch (action.type) {
    case PostsActionsType.GET_POSTS:
      return {
        ...state,
        posts: action.posts.map((p:any) =>
          post(p.userId, p.id, p.title, p.body, action.photoInfo)
        ),
      };
    case PostsActionsType.TOGGLE_IS_FETCHING_POSTS:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case PostsActionsType.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case PostsActionsType.SET_TOTAL_POSTS_COUNT:
      return {
        ...state,
        totalPostsCount: action.totalPostsCount,
      };
    case PostsActionsType.SHOW_MODAL_WINDOW:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.postId) {
            return { ...p, info: action.photo, isModalVisible: true };
          }
          return p;
        }),
      };
    case PostsActionsType.HIDE_MODAL_WINDOW:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.postId) {
            return { ...p, isModalVisible: false };
          }
          return p;
        }),
      };
    case PostsActionsType.LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.postId) {
            return { ...p, liked: true, likes: action.likes };
          }
          return p;
        }),
      };
    case PostsActionsType.DIS_LIKE:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.postId) {
            return { ...p, liked: false, likes: action.likes };
          }
          return p;
        }),
      };
    case PostsActionsType.FILTER_POSTS_BY_DATE:
      return {
        ...state,
        filterBy: action.filterByDate,
      };
    case PostsActionsType.FILTER_POSTS_BY_ALPHABET:
      return {
        ...state,
        filterBy: action.filterByAlphabet,
      };
    default:
      return state;
  }
};

export default postsReducer;
