import { useMutation } from "react-query";

import { MutationHookParams } from "apis/type";

import authApi from "./index";

export const usePostLoginUser = (
  params?: MutationHookParams<typeof authApi.PostLoginUser>
) => {
  return useMutation(authApi.PostLoginUser, { ...params?.options });
};
export const usePostLogoutUser = (
  params?: MutationHookParams<typeof authApi.PostLogoutUser>
) => {
  return useMutation(authApi.PostLogoutUser, { ...params?.options });
};
