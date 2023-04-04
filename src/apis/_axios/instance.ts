import axios, { AxiosInstance } from "axios";
import { CONFIG } from "config";
import { getToken } from "utils/sessionStorage/token";
const token = getToken();
const instance: AxiosInstance = axios.create({
  baseURL: CONFIG.API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// const setAuthHeader = (token: string) => {
//   if (token) {
//     instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   }
// };
// const unsetAuthHeader = () => {
//   delete instance.defaults.headers.common["Authorization"];
// };

instance.interceptors.request.use(
  (config) => {
    const isAccess = !!token;
    // if (isAccess) {
    //   setAuthHeader(token as string);
    //   config.headers.Authorization = `Bearer ${token}`;
    //   return config;
    // }
    // unsetAuthHeader();
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
      return Promise.reject(error);
    } catch (e) {
      console.log(e);
    }
  }
);
// export { setAuthHeader, unsetAuthHeader };
export default instance;
