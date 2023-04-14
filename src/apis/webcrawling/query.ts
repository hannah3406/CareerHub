import { InfiniteQueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";

import { useInfiniteQuery } from "react-query";
import webCrawlingApi from ".";
import { PositionSearchParams } from "./type";

export const WEBCRAWLING_API_QUERY_KEY = {
  GETLIST: (searchParams?: PositionSearchParams) => [
    QUERY_KEY.WEBCRAWLING.GETLIST,
    searchParams,
  ],
};
export function useGetListQuery(
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
