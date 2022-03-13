export const GET_COMMENTS = "GET_COMMENTS";

export const getCommentsAC = (postId, comments) => ({
  type: GET_COMMENTS,
  postId,
  comments,
});
