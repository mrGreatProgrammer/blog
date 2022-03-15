import { DisLikeAction, FilterByAlphabetAction, FilterByDateAction, filterType, GetPostsAction, HideModalWindowAction, LikePostAction, PostsActionsType, SetCurrentPageAction, SetTotalPostsCountACtion, ShowModalWindowAction, ToggleIsFetchingAction } from "../types/posts-reducer";


// ACTION CREATORS
export const getPostsAC = (posts: [], photoInfo: []):GetPostsAction => ({
  type: PostsActionsType.GET_POSTS,
  posts,
  photoInfo,
});
export const toggleIsFetchingAC = (isFetching: boolean):ToggleIsFetchingAction => ({
  type: PostsActionsType.TOGGLE_IS_FETCHING_POSTS,
  isFetching,
});
export const setCurrentPageAC = (currentPage: number):SetCurrentPageAction => ({
  type: PostsActionsType.SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalPostsCountAC = (totalPostsCount: number):SetTotalPostsCountACtion => ({
  type: PostsActionsType.SET_TOTAL_POSTS_COUNT,
  totalPostsCount,
});
export const showModalWindowAC = (postId: number, postData: {}, photo: []):ShowModalWindowAction => ({
  type: PostsActionsType.SHOW_MODAL_WINDOW,
  postId,
  postData,
  photo,
});
export const hideModalWindowAC = (postId: number):HideModalWindowAction => ({
  type: PostsActionsType.HIDE_MODAL_WINDOW,
  postId,
});

export const likePostAC = (postId: number, likes: number):LikePostAction => ({
  type: PostsActionsType.LIKE_POST,
  postId,
  likes: likes+=1,
});
export const disLikePostAC = (postId: number, likes: number):DisLikeAction => ({
  type: PostsActionsType.DIS_LIKE,
  postId,
  likes: likes-=1,
});
export const filterByDateAC = (filterByDate: filterType ):FilterByDateAction => ({
  type: PostsActionsType.FILTER_POSTS_BY_DATE,
  filterByDate,
});
export const filterByAlphabetAC = (filterByAlphabet: filterType):FilterByAlphabetAction => ({
  type: PostsActionsType.FILTER_POSTS_BY_ALPHABET,
  filterByAlphabet,
});
