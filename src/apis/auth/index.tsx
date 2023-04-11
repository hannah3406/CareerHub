import instance from "apis/_axios/instance";
import { AxiosInstance } from "axios";
import { deleteToken, setToken } from "utils/sessionStorage/token";

export type LoginData = {
  email: string;
  password: string;
};
export class AuthApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }
  loginUser = async (loginData: LoginData): Promise<string> => {
    const { data } = await instance({
      method: "POST",
      url: `/auth/login`,
      data: loginData,
    });

    setToken(data.accessToken);
    return data.accessToken;
  };
  logoutUser = async (email: string): Promise<{}> => {
    deleteToken();
    const { data } = await instance({
      method: "POST",
      url: `/auth/logout`,
      data: { email },
    });
    return data;
  };
  // GetRefreshToken = async (): Promise<{}> => {
  //   const { data } = await instance({
  //     method: "GET",
  //     url: `/auth/refresh`,
  //   });

  //   setToken(data);
  //   return data;
  // };
}

const authApi = new AuthApi();

export default authApi;
