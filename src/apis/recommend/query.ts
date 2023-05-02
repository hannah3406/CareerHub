import { QueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";

import { useQuery } from "react-query";
import recommendApi from ".";

export const RECOMMEND_API_QUERY_KEY = {
  GETLIST: () => [QUERY_KEY.RECOMMEND.GETLIST],
};
export function useGetRecommendQuery(
  params: QueryHookParams<typeof recommendApi.getRecommend>
) {
  const queryKey = RECOMMEND_API_QUERY_KEY.GETLIST();

  const query = useQuery(
    queryKey,
    () => recommendApi.getRecommend(),
    params?.options
  );
  return { ...query, queryKey };
}
