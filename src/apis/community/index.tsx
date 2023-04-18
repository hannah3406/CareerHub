import instance from "apis/_axios/instance";
import { AxiosInstance } from "axios";
import { CommunityListResult } from "./type";

export class CommunityApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getList = async (pageParam?: number): Promise<CommunityListResult> => {
    const page = !!pageParam ? pageParam : 1;

    const params = {
      page,
    };
    const { data } = await instance({
      method: "GET",
      url: `/community/getList`,
      params,
    });
    return { page, results: data };
  };
}

const communityApi = new CommunityApi();

export default communityApi;
