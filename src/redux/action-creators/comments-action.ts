import {
  CommentsActionsType,
  GetCommentsAction,
  IComment,
} from "../types/comments-reducer";

export const getCommentsAC = ( postId: number, comments: any[]): GetCommentsAction =>
 ({
  type: CommentsActionsType.GET_COMMENTS,
  postId,
  comments,
});
