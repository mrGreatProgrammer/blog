import { GET_COMMENTS } from "../action-creators/comments-action";

// comment constructor
function comment(postId, id, userName, email, text) {
  return {
    postId,
    id,
    userName,
    email,
    text,
  };
}

// initialized a default state
let initialState = {
  comments: [],
  postId: 0,
};

// REDUCER
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
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
