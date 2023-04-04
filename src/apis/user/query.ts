import { QueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";
import { useQuery } from "react-query";
import userApi from ".";
export const USER_API_QUERY_KEY = {
  PROFILE: () => [QUERY_KEY.USER.PROFILE],
};
export function useUserProfileQuery(
  token: string | undefined,
  params?: QueryHookParams<typeof userApi.getProfile>
) {
  const queryKey = USER_API_QUERY_KEY.PROFILE();
  const query = useQuery(
    queryKey,
    () => userApi.getProfile(token),
    params?.options
  );
  return { ...query, queryKey };
}
