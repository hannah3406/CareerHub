import instance from "apis/_axios/instance";
import { AxiosInstance } from "axios";
import { deleteToken, setToken } from "utils/sessionStorage/token";
import { LoginData, LogoutData } from "./type";

export class AuthApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }
  PostLoginUser = async (loginData: LoginData): Promise<{}> => {
    const { data } = await instance({
      method: "POST",
      url: `/auth/login`,
      data: loginData,
    });

    setToken(data.accessToken);
    return new Promise((resolve) => setTimeout(() => resolve(data), 0));
  };
  PostLogoutUser = async (logoutData: LogoutData): Promise<{}> => {
    deleteToken();
    const { data } = await instance({
      method: "POST",
      url: `/auth/logout`,
      data: logoutData,
    });
    return data;
  };
  GetRefreshToken = async (): Promise<{}> => {
    const { data } = await instance({
      method: "GET",
      url: `/auth/refresh`,
    });

    setToken(data.accessToken);
    return data;
  };
}

const authApi = new AuthApi();

export default authApi;
