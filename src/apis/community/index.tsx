import instance from "apis/_axios/instance";
import { AxiosInstance } from "axios";
import {
  CommunityList,
  CommunityListResult,
  CommunityPageSearchParams,
  CreateBoard,
  UpdateBoard,
} from "./type";

export class CommunityApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getList = async (
    pageParam: CommunityPageSearchParams
  ): Promise<CommunityListResult> => {
    const { keyword, type, page } = pageParam;
    const params = {
      page,
      keyword,
      type,
    };
    const { data } = await instance({
      method: "GET",
      url: `/community/getList`,
      params,
    });
    const { results, total } = data;
    return { page, results, total };
  };

  getById = async (_id: string | undefined): Promise<CommunityList> => {
    const { data } = await instance({
      method: "GET",
      url: `/community/${_id}`,
    });
    return data[0];
  };
  deleteBoard = async (_id: string | undefined): Promise<{}> => {
    const { data } = await instance({
      method: "DELETE",
      url: `/community/deleteBoard/${_id}`,
    });
    return data;
  };

  createBoard = async (boardData: CreateBoard): Promise<{}> => {
    const { data } = await instance({
      method: "POST",
      url: `/community/createBoard`,
      data: boardData,
    });
    return data;
  };
  updateBoard = async (
    _id: string | undefined,
    editData: UpdateBoard
  ): Promise<{}> => {
    const { title, description, positionArticle, skill, userInfo } = editData;
    const filter = {
      title,
      description,
      positionArticle: positionArticle ?? null,
      skill: skill ?? [],
      userInfo,
    };
    const { data } = await instance({
      method: "PATCH",
      url: `/community/updateBoard/${_id}`,
      data: filter,
    });
    return data;
  };
}

const communityApi = new CommunityApi();

export default communityApi;