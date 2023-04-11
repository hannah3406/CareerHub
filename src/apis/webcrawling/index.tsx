import instance from "apis/_axios/instance";
import { AxiosInstance } from "axios";
import { PositionListResult } from "./type";

export class WebCrawlingApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getList = async (pageParam?: number): Promise<PositionListResult> => {
    const page = !!pageParam ? pageParam : 0;
    const { data } = await instance({
      method: "GET",
      url: `/web-crawling/getList`,
      params: { page },
    });
    return { page, results: data };
  };
}

const webCrawlingApi = new WebCrawlingApi();

export default webCrawlingApi;
