export type CommunityList = {
  _id: string;
  title: string;
  description?: string;
  positionArticle?: PositionArticle;
  like: number;
  skill?: string[];
  userInfo: UserInfo;
  createdAt: string;
  updatedAt: string;
};

export type CommunityListResult = {
  page: number;
  results: CommunityList[];
};

export type PositionArticle = {
  positionId: string;
  title: string;
  company: string;
  url: string;
};

export type UserInfo = {
  userId: string;
  userName: string;
  profileimg: string;
};

export type CreateBoard = {
  title: string;
  description?: string;
  positionArticle?: PositionArticle;
  skill?: string[];
  userInfo: UserInfo;
};
