import { useMutation } from "react-query";

import { MutationHookParams } from "apis/type";

import userApi from "./index";

export const usePostCreateUser = (
  params?: MutationHookParams<typeof userApi.PostCreateUser>
) => {
  return useMutation(userApi.PostCreateUser, { ...params?.options });
};
