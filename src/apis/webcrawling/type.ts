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
};

export type PositionSearchParams = {
  keyword: string | undefined;
  type?: string | undefined;
};
