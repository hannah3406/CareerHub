import instance from "apis/_axios/instance";
import { AxiosInstance } from "axios";

import { userProfile } from "./type";

export class UserApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  updateUser = async (id: string, type: string, value: string): Promise<{}> => {
    const { data } = await instance({
      method: "PATCH",
      url: `/user/profile/${id}`,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: 0,
      },
      data: { type, value },
    });
    return data;
  };

  getProfile = async (): Promise<userProfile | undefined> => {
    const { data } = await instance({
      method: "GET",
      url: `/user/profile`,
    });
    return data;
  };
}

const userApi = new UserApi();

export default userApi;
