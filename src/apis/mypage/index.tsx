import instance from "apis/_axios/instance";
import { AxiosInstance } from "axios";

import { myBoard, myComment } from "./type";

export class MyPageApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  myBoard = async (): Promise<myBoard[]> => {
    const { data } = await instance({
      method: "GET",
      url: `/myPage/myBoard`,
    });
    return data;
  };

  myComment = async (): Promise<myComment[]> => {
    const { data } = await instance({
      method: "GET",
      url: `/myPage/myComment`,
    });
    return data;
  };
}

const myPageApi = new MyPageApi();

export default myPageApi;
