import instance from "apis/_axios/instance";
import { AxiosInstance } from "axios";
import {
  CommunityListResult,
  CommunityPageSearchParams,
  CreateBoard,
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

  createBoard = async (boardData: CreateBoard): Promise<{}> => {
    const { data } = await instance({
      method: "POST",
      url: `/community/createBoard`,
      data: boardData,
    });
    return data;
  };
}

const communityApi = new CommunityApi();

export default communityApi;
