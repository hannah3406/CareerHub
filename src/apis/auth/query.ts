import { QueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";
import { useQuery } from "react-query";
import { getRefreshToken } from "utils/sessionStorage/token";

import authApi from ".";

export const AUTH_API_QUERY_KEY = {
  REFRESH: (token?: string | null) => [QUERY_KEY.AUTH.REFRESH, token],
};
export function useGetRefreshQuery(
  params?: QueryHookParams<typeof authApi.getRefresh>
) {
  const token = getRefreshToken();
  const queryKey = AUTH_API_QUERY_KEY.REFRESH(token);
  const query = useQuery(
    queryKey,
    () => authApi.getRefresh(token),
    params?.options
  );
  return { ...query, queryKey };
}
