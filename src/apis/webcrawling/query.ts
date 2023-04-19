import { InfiniteQueryHookParams, QueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";

import { useInfiniteQuery, useQuery } from "react-query";
import webCrawlingApi from ".";
import { PositionPageSearchParams, PositionSearchParams } from "./type";

export const WEBCRAWLING_API_QUERY_KEY = {
  GETLIST: (searchParams?: PositionSearchParams) => [
    QUERY_KEY.WEBCRAWLING.GETLIST,
    searchParams,
  ],
  GETLISTCOUNT: (searchParams?: PositionSearchParams) => [
    QUERY_KEY.WEBCRAWLING.GETLIST,
    searchParams,
  ],
  GETPAGELIST: (searchParams?: PositionPageSearchParams) => [
    QUERY_KEY.WEBCRAWLING.GETLIST,
    searchParams,
  ],
};
export function useGetInfinityScrollListQuery(
  params: InfiniteQueryHookParams<typeof webCrawlingApi.getList>
) {
  const queryKey = WEBCRAWLING_API_QUERY_KEY.GETLIST(params.variables);

  const query = useInfiniteQuery(
    queryKey,
    ({ pageParam = 1 }) => webCrawlingApi.getList(params.variables, pageParam),
    params?.options
  );
  return { ...query, queryKey };
}
export function useGetPaginationListQuery(
  params: QueryHookParams<typeof webCrawlingApi.getPaginationList>
) {
  const queryKey = WEBCRAWLING_API_QUERY_KEY.GETPAGELIST(params.variables);

  const query = useQuery(
    queryKey,
    () => webCrawlingApi.getPaginationList(params.variables),
    params?.options
  );
  return { ...query, queryKey };
}
export function useGetListCountQuery(
  params: QueryHookParams<typeof webCrawlingApi.getListCount>
) {
  const queryKey = WEBCRAWLING_API_QUERY_KEY.GETLISTCOUNT(params.variables);

  const query = useQuery(
    queryKey,
    () => webCrawlingApi.getListCount(params.variables),
    params?.options
  );
  return { ...query, queryKey };
}
