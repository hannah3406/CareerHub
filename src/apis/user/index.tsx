import instance from "apis/_axios/instance";
import { AxiosInstance } from "axios";

import { CreateUser, userProfile } from "./type";

export class UserApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }
  createUser = async (userData: CreateUser): Promise<{}> => {
    const { data } = await instance({
      method: "POST",
      url: `/user/create`,
      data: userData,
    });
    return data;
  };

  getProfile = async (token: string | undefined): Promise<userProfile> => {
    const { data } = await instance({
      method: "GET",
      url: `/user/profile`,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: 0,
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  };
}

const userApi = new UserApi();

export default userApi;
