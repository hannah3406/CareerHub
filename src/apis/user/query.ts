import { QueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";
import { useQuery } from "react-query";

import userApi from ".";

export const USER_API_QUERY_KEY = {
  GETPROFILE: (token?: string | null) => [QUERY_KEY.USER.PROFILE, token],
  GET_MY_ARTICLE: [QUERY_KEY.USER.MYARTICLE],
};
export function useGetProfileQuery(
  params?: QueryHookParams<typeof userApi.getProfile>
) {
  const queryKey = USER_API_QUERY_KEY.GETPROFILE(params?.variables);
  const query = useQuery(
    queryKey,
    () => userApi.getProfile(params?.variables),
    params?.options
  );
  return { ...query, queryKey };
}
export function useGetMyArticleQuery(
  params?: QueryHookParams<typeof userApi.myArticle>
) {
  const queryKey = USER_API_QUERY_KEY.GET_MY_ARTICLE;
  const query = useQuery(queryKey, () => userApi.myArticle(), params?.options);
  return { ...query, queryKey };
}
