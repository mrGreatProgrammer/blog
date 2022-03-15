import {
  CommentsAction,
  CommentsActionsType,
  ICommentsState,
} from "../types/comments-reducer";

// comment constructor
function comment(
  postId: number,
  id: number,
  userName: string,
  email: string,
  text: string
) {
  return {
    postId,
    id,
    userName,
    email,
    text,
  };
}

// initialized a default state
let initialState: ICommentsState = {
  comments: [],
  postId: 0,
};

// REDUCER
const commentsReducer = (state: ICommentsState = initialState, action: CommentsAction): ICommentsState => {
  switch (action.type) {
    case CommentsActionsType.GET_COMMENTS:
      return {
        ...state,
        postId: action.postId,
        comments: action.comments.map((c) =>
          comment(c.postId, c.id, c.name, c.email, c.body)
        ),
      };
    default:
      return state;
  }
};

export default commentsReducer;
