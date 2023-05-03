import { CommunityList } from "apis/community/type";
import instance from "apis/_axios/instance";
import { AxiosInstance } from "axios";

export class RecommendApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getRecommend = async (): Promise<CommunityList[]> => {
    const { data } = await instance({
      method: "GET",
      url: `/recommend-board`,
    });
    return data;
  };
}

const recommendApi = new RecommendApi();

export default recommendApi;
