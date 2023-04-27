import { BoardInfo } from "apis/community/type";
import { UserInfo } from "apis/user/type";

export type myBoard = {
  _id: string;
  title: string;
  updatedAt: string;
};

export type myComment = {
  userInfo: UserInfo;
  boardInfo: BoardInfo;
  updatedAt: string;
  contents: string;
};
