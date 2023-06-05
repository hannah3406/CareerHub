import instance from "apis/_axios/instance";
import { AxiosInstance } from "axios";
import {
  deleteToken,
  setAccessToken,
  setRefreshToken,
} from "utils/sessionStorage/token";
import { CreateUser } from "./type";

export type LoginData = {
  email: string;
  password: string;
};
export class AuthApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }
  createUser = async (userData: CreateUser): Promise<{}> => {
    const { data } = await instance({
      method: "POST",
      url: `/auth/create`,
      data: userData,
    });
    return data;
  };
  loginUser = async (loginData: LoginData): Promise<{}> => {
    const { data } = await instance({
      method: "POST",
      url: `/auth/login`,
      data: loginData,
    });
    const { accessToken, refreshToken } = data;
    setRefreshToken(refreshToken);
    setAccessToken(accessToken);
    return { accessToken, refreshToken };
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
  getRefresh = async (token: string | null): Promise<{}> => {
    const { data } = await instance({
      method: "GET",
      url: `/auth/refresh`,
      headers: { Authorization: `Bearer ${token}` },
    });
    const { accessToken, refreshToken } = data;
    setRefreshToken(refreshToken);
    setAccessToken(accessToken);
    return data;
  };
}

const authApi = new AuthApi();

export default authApi;
