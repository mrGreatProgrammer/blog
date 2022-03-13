import commentsAPI from "../../api/comments-api";
import {
  getCommentsAC,
  toggleIsFetchingCommentsAC,
} from "../action-creators/comments-action";

export const getComments = (postId) => async (dispatch) => {
  await commentsAPI.getComments(postId).then((res) => {
    dispatch(getCommentsAC(postId, res.data));
  });
};
