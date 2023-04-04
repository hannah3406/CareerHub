// import { SocialRefreshResult } from '@apis/user/type';

import { CONFIG } from "config";

import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../helper";

const TOKEN_KEY = CONFIG.AUTH_TOKEN_KEY || "JWT_SECRET_KEY";

// export const getToken = () => {
//   const token = getLocalStorage<SocialRefreshResult>(TOKEN_KEY, {
//     access: null,
//     refresh: null,
//   });
//   return token;
// };
export const getIssueContents = () => {
  const showGuide = getLocalStorage("issueContents");
  return showGuide;
};
export const getFactCheck = () => {
  const showGuide = getLocalStorage("factCheck");
  return showGuide;
};
// export const setToken = (token: SocialRefreshResult) => {
//   setLocalStorage(TOKEN_KEY, token);
// };
export const setIssueContents = (type: string) => {
  setLocalStorage("issueContents", type);
};
export const setFactCheck = (type: string) => {
  setLocalStorage("factCheck", type);
};
// export const deleteToken = () => {
//   removeLocalStorage(TOKEN_KEY);
// };
export const deleteIssueContents = () => {
  removeLocalStorage("issueContents");
};
export const deleteFactCheck = () => {
  removeLocalStorage("factCheck");
};
