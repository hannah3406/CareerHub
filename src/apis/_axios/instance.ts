import axios, { AxiosInstance } from "axios";
import { CONFIG } from "config";
import { deleteToken, getToken } from "utils/sessionStorage/token";

const instance: AxiosInstance = axios.create({
  baseURL: CONFIG.API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
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
    const token = getToken();

    const isAccess = !!token;
    if (isAccess) {
      setAuthHeader(token as string);
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
    unsetAuthHeader();
    return config;
  },
  (error) => {
    console.log("dd");
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
