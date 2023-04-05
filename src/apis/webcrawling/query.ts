import { QueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";
import { useQuery } from "react-query";
import webCrawlingApi from ".";

export const WEBCRAWLING_API_QUERY_KEY = {
  GETLIST: () => [QUERY_KEY.WEBCRAWLING.GETLIST],
};
export function useGetListQuery(
  page?: number | undefined,
  params?: QueryHookParams<typeof webCrawlingApi.getList>
) {
  const queryKey = WEBCRAWLING_API_QUERY_KEY.GETLIST();
  const query = useQuery(
    queryKey,
    () => webCrawlingApi.getList(page),
    params?.options
  );
  return { ...query, queryKey };
}
