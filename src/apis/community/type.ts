import { UserInfo } from "apis/user/type";
import { PositionArticle } from "apis/webcrawling/type";

export type CommunityList = {
  _id: string;
  title: string;
  description?: string;
  positionArticle?: PositionArticle;
  like: string[];
  skill?: string[];
  userInfo: UserInfo;
  createdAt: string;
  updatedAt: string;
  commentCnt: number;
  view: number;
};
export interface ImyVariables {
  _id?: string;
  title?: string;
  description?: string;
  positionArticle?: PositionArticle | null;
  skill?: string[] | undefined;
  userInfo?: UserInfo;
}
export type CommunityListResult = {
  page?: number;
  results: CommunityList[];
  total: number;
};

export type BoardInfo = {
  boardId: string;
  title: string;
};
export type CreateBoard = {
  title: string;
  description?: string;
  positionArticle?: PositionArticle;
  skill?: string[];
  userInfo: UserInfo;
};
export type UpdateBoard = {
  title?: string;
  description?: string;
  positionArticle?: PositionArticle | null;
  skill?: string[] | undefined;
  userInfo?: UserInfo;
};

export type CommunityPageSearchParams = {
  keyword?: string | undefined;
  type?: string | undefined;
  page?: number;
};
