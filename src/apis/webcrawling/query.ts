import { InfiniteQueryHookParams, QueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";

import { useInfiniteQuery } from "react-query";
import webCrawlingApi from ".";

export const WEBCRAWLING_API_QUERY_KEY = {
  GETLIST: (keyword?: string | undefined) => [
    QUERY_KEY.WEBCRAWLING.GETLIST,
    keyword,
  ],
};
export function useGetListQuery(
  keyword: string | undefined,
  params?: InfiniteQueryHookParams<typeof webCrawlingApi.getList>
) {
  const queryKey = WEBCRAWLING_API_QUERY_KEY.GETLIST(keyword);
  const query = useInfiniteQuery(
    queryKey,
    ({ pageParam = 1 }) => webCrawlingApi.getList(keyword, pageParam),
    params?.options
  );
  return { ...query, queryKey };
}
