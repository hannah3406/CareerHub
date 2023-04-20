export type PositionList = {
  _id: string;
  url: string;
  title: string;
  majorTasks: string;
  experience: string;
  type: string;
  closingdate?: string;
  preferential: string;
  welfare: string;
  skill: string[];
  location: string;
  locationDetail: null | string;
  company: string;
  createdAt: string;
  updatedAt: string;
  description?: string;
};

export type PositionListResult = {
  page: number;
  results: PositionList[];
  total: number;
};
export type PositionPageListResult = {
  results: PositionList[];
  total: number;
};

export type PositionSearchParams = {
  keyword: string | undefined;
  type?: string | undefined;
};
export type PositionPageSearchParams = {
  keyword: string | undefined;
  type?: string | undefined;
  page?: number;
};
