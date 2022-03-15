export interface IComment {
  postId: number;
  id: number;
  userName: string;
  email: string;
  text: string;
}

export interface ICommentsState {
  comments: IComment[];
  postId: number;
}
export enum CommentsActionsType {
  GET_COMMENTS = "GET_COMMENTS",
}
export interface GetCommentsAction {
  type: CommentsActionsType.GET_COMMENTS;
  postId: number;
  comments: any[];
}
export type CommentsAction = GetCommentsAction;
