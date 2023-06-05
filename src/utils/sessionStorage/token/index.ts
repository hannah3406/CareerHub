import { CONFIG } from "config";

const ACCESS_TOKEN_KEY = CONFIG.AUTH_ACCESS_TOKEN_KEY || "ACCESS_TOKEN";

const REFRESH_TOKEN_KEY = CONFIG.AUTH_REFRESH_TOKEN_KEY || "REFRESH_TOKEN";

export const getAccessToken = () => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN_KEY);
  return accessToken;
};

export const setAccessToken = (accessToken: string) => {
  window.sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

export const getRefreshToken = () => {
  const refreshToken = window.sessionStorage.getItem(REFRESH_TOKEN_KEY);
  return refreshToken;
};

export const setRefreshToken = (refreshToken: string) => {
  window.sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};
export const deleteToken = (onlyAccess?: boolean) => {
  if (!onlyAccess) {
    window.sessionStorage.removeItem(REFRESH_TOKEN_KEY);
  }
  window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
};
