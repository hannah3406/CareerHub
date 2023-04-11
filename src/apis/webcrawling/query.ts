import { InfiniteQueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";
import { useInfiniteQuery } from "react-query";
import webCrawlingApi from ".";

export const WEBCRAWLING_API_QUERY_KEY = {
  GETLIST: () => [QUERY_KEY.WEBCRAWLING.GETLIST],
};
export function useGetListQuery(
  params?: InfiniteQueryHookParams<typeof webCrawlingApi.getList>
) {
  const queryKey = WEBCRAWLING_API_QUERY_KEY.GETLIST();
  const query = useInfiniteQuery(
    queryKey,
    ({ pageParam = 1 }) => webCrawlingApi.getList(pageParam),
    params?.options
  );
  return { ...query, queryKey };
}
