import { InfiniteQueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";

import { useInfiniteQuery } from "react-query";
import communityApi from ".";

export const COMMUNITY_API_QUERY_KEY = {
  GETLIST: () => [QUERY_KEY.COMMUNITY.GETLIST],
};
export function useGetCommunityListQuery(
  params: InfiniteQueryHookParams<typeof communityApi.getList>
) {
  const queryKey = COMMUNITY_API_QUERY_KEY.GETLIST();

  const query = useInfiniteQuery(
    queryKey,
    ({ pageParam = 1 }) => communityApi.getList(pageParam),
    params?.options
  );
  return { ...query, queryKey };
}
