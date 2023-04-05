import instance from "apis/_axios/instance";
import { AxiosInstance } from "axios";
import { PositionList } from "./type";

export class WebCrawlingApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getList = async (page?: number): Promise<PositionList[]> => {
    const { data } = await instance({
      method: "GET",
      url: `/web-crawling/getList`,
      params: { page },
    });
    return data;
  };
}

const webCrawlingApi = new WebCrawlingApi();

export default webCrawlingApi;
