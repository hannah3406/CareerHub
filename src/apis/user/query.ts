import { QueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";
import { useQuery } from "react-query";

import userApi from ".";

export const USER_API_QUERY_KEY = {
  GETPROFILE: (token?: string | null) => [QUERY_KEY.USER.PROFILE, token],
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
