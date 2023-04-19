import { QueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";

import { useQuery } from "react-query";
import communityApi from ".";
import { CommunityPageSearchParams } from "./type";

export const COMMUNITY_API_QUERY_KEY = {
  GETLIST: (searchParams?: CommunityPageSearchParams) => [
    QUERY_KEY.COMMUNITY.GETLIST,
    searchParams,
  ],
};
export function useGetCommunityListQuery(
  params: QueryHookParams<typeof communityApi.getList>
) {
  const queryKey = COMMUNITY_API_QUERY_KEY.GETLIST(params.variables);

  const query = useQuery(
    queryKey,
    () => communityApi.getList(params.variables),
    params?.options
  );
  return { ...query, queryKey };
}
