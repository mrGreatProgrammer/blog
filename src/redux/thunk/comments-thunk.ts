import { Dispatch } from "redux";
import commentsAPI from "../../api/comments-api";
import {
  getCommentsAC,
} from "../action-creators/comments-action";
import { CommentsAction } from "../types/comments-reducer";

export const getComments = (postId: number) => async (dispatch: Dispatch<CommentsAction>) => {
  await commentsAPI.getComments(postId).then((res) => {
    dispatch(getCommentsAC(postId, res.data));
  });
};
