import { QueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";
import { useQuery } from "react-query";
import authApi from ".";

export const AUTH_API_QUERY_KEY = {
  REFRESH: () => [QUERY_KEY.AUTH.REFRESH],
};
export function useGetRefreshToken(
  params?: QueryHookParams<typeof authApi.GetRefreshToken>
) {
  const queryKey = AUTH_API_QUERY_KEY.REFRESH();
  const query = useQuery(
    queryKey,
    () => authApi.GetRefreshToken(),
    params?.options
  );
  return { ...query, queryKey };
}
