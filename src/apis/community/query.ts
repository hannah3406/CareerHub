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
  GETBYID: (id: string | undefined) => [QUERY_KEY.COMMUNITY.GETARTICLE, id],
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

export function useGetCommunityDetailQuery(
  params: QueryHookParams<typeof communityApi.getById>
) {
  const queryKey = COMMUNITY_API_QUERY_KEY.GETBYID(params.variables);

  const query = useQuery(
    queryKey,
    () => communityApi.getById(params.variables),
    params?.options
  );
  return { ...query, queryKey };
}
