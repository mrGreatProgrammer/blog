export interface IPost {
  userId: number;
  id: number;
  title: string | null;
  textContent: string | null;
  liked: boolean;
  likes: number;
  isModalVisible: boolean;
  info: {};
}
export type postId = number
export type filterType = string | null;

export interface IPostsState {
  currentPage: number;
  pageSize: number;
  posts: IPost[];
  isFetching: boolean;
  totalPostsCount: number;
  filterBy: filterType;
}
export enum PostsActionsType {
  GET_POSTS = "GET_POSTS",
  TOGGLE_IS_FETCHING_POSTS = "TOGGLE_IS_FETCHING_POSTS",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_TOTAL_POSTS_COUNT = "SET_TOTAL_POSTS_COUNT",
  SHOW_MODAL_WINDOW = "SHOW_MODAL_WINDOW",
  HIDE_MODAL_WINDOW = "HIDE_MODAL_WINDOW",
  LIKE_POST = "LIKE_POST",
  DIS_LIKE = "DIS_LIKE",
  FILTER_POSTS_BY_DATE = "FILTER_POSTS_BY_DATE",
  FILTER_POSTS_BY_ALPHABET = "FILTER_POSTS_BY_ALPHABET",
}

export interface GetPostsAction {
  type: PostsActionsType.GET_POSTS;
  posts: [];
  photoInfo?: [];
}
export interface ToggleIsFetchingAction {
  type: PostsActionsType.TOGGLE_IS_FETCHING_POSTS;
  isFetching: boolean;
}
export interface SetCurrentPageAction {
  type: PostsActionsType.SET_CURRENT_PAGE;
  currentPage: number;
}
export interface SetTotalPostsCountACtion {
  type: PostsActionsType.SET_TOTAL_POSTS_COUNT;
  totalPostsCount: number;
}
export interface ShowModalWindowAction {
  type: PostsActionsType.SHOW_MODAL_WINDOW;
  postId: number;
  postData: {};
  photo: [];
}
export interface HideModalWindowAction {
  type: PostsActionsType.HIDE_MODAL_WINDOW;
  postId: number;
}
export interface LikePostAction {
  type: PostsActionsType.LIKE_POST;
  postId: number;
  likes: number;
}
export interface DisLikeAction {
  type: PostsActionsType.DIS_LIKE;
  postId: number;
  likes: number;
}
export interface FilterByDateAction {
  type: PostsActionsType.FILTER_POSTS_BY_DATE;
  filterByDate: filterType;
}
export interface FilterByAlphabetAction {
  type: PostsActionsType.FILTER_POSTS_BY_ALPHABET;
  filterByAlphabet: filterType;
}

export type PostsActions =
  | GetPostsAction
  | ToggleIsFetchingAction
  | SetCurrentPageAction
  | SetTotalPostsCountACtion
  | ShowModalWindowAction
  | HideModalWindowAction
  | LikePostAction
  | DisLikeAction
  | FilterByDateAction
  | FilterByAlphabetAction;
