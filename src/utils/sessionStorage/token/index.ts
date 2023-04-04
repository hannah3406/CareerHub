import { CONFIG } from "config";

const TOKEN_KEY = CONFIG.AUTH_TOKEN_KEY || "ACCESS_TOKEN";

export const getToken = () => {
  const token = window.sessionStorage.getItem(TOKEN_KEY);
  return token;
};

export const setToken = (token: string) => {
  window.sessionStorage.setItem(TOKEN_KEY, token);
};

export const deleteToken = () => {
  window.sessionStorage.removeItem(TOKEN_KEY);
};
