import { BoardInfo } from "apis/community/type";
import { UserInfo } from "apis/user/type";

export type CreateComment = {
  contents?: string;
  boardInfo?: BoardInfo;
  userInfo: UserInfo;
};
export type BoardCommentList = {
  _id: string;
  contents: string;
  boardInfo?: BoardInfo;
  userInfo: UserInfo;
  createdAt: string;
  updatedAt: string;
};
