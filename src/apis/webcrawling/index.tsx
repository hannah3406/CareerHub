import instance from "apis/_axios/instance";
import { AxiosInstance } from "axios";
import {
  PositionList,
  PositionListResult,
  PositionPageSearchParams,
  PositionSearchParams,
} from "./type";

export class WebCrawlingApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getList = async (
    searchParams: PositionSearchParams,
    pageParam?: number
  ): Promise<PositionListResult> => {
    const page = !!pageParam ? pageParam : 1;
    const { keyword, type } = searchParams;
    const params = {
      page,
      keyword,
      type,
    };
    const { data } = await instance({
      method: "GET",
      url: `/web-crawling/getList`,
      params,
    });
    const { results, total } = data;
    return { page, results, total };
  };

  getPaginationList = async (
    searchParams: PositionPageSearchParams
  ): Promise<PositionListResult> => {
    const { keyword, type, page } = searchParams;
    const params = {
      page,
      keyword,
      type,
    };
    const { data } = await instance({
      method: "GET",
      url: `/web-crawling/getList`,
      params,
    });
    const { results, total } = data;
    return { page, results, total };
  };
}

const webCrawlingApi = new WebCrawlingApi();

export default webCrawlingApi;
