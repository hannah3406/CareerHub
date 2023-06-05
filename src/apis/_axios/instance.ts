import authApi from "apis/auth";
import axios, { AxiosInstance } from "axios";
import { CONFIG } from "config";

import {
  deleteToken,
  getAccessToken,
  getRefreshToken,
} from "utils/sessionStorage/token";

const instance: AxiosInstance = axios.create({
  baseURL: CONFIG.API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: 0,
  },
  withCredentials: true,
});

const setAuthHeader = (token: string) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};
const unsetAuthHeader = () => {
  delete instance.defaults.headers.common["Authorization"];
};

instance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    const isAccess = !!token;
    if (isAccess) {
      console.log("---?---", token);
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
    unsetAuthHeader();
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    try {
      const { response: res } = error || {};
      if (res) {
        const { status } = res;
        const isUnAuthError = status === 401;
        if (isUnAuthError) {
          deleteToken();
          setTimeout(() => {
            alert("로그인 후 이용 가능합니다.");
            window.location.href = "/login";
          }, 0);
        }
        if (status === 410) {
          deleteToken(true);
          const refreshToken = getRefreshToken();
          setAuthHeader(refreshToken as string);
          await authApi.getRefresh(refreshToken);
        }
      }
      return Promise.reject(error);
    } catch (e) {
      console.log(e);
      return Promise.reject(error);
    }
  }
);
export { setAuthHeader, unsetAuthHeader };
export default instance;
