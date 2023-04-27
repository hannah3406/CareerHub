import { QueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";
import { useQuery } from "react-query";

import MyPageApi from ".";

export const MYPAGE_API_QUERY_KEY = {
  GET_MY_BOARD: [QUERY_KEY.MYPAGE.GET_MY_BOARD],
  GET_MY_COMMENT: [QUERY_KEY.MYPAGE.GET_MY_COMMENT],
};

export function useGetMyArticleQuery(
  params?: QueryHookParams<typeof MyPageApi.myBoard>
) {
  const queryKey = MYPAGE_API_QUERY_KEY.GET_MY_BOARD;
  const query = useQuery(queryKey, () => MyPageApi.myBoard(), params?.options);
  return { ...query, queryKey };
}
export function useGetMyCommentQuery(
  params?: QueryHookParams<typeof MyPageApi.myComment>
) {
  const queryKey = MYPAGE_API_QUERY_KEY.GET_MY_COMMENT;
  const query = useQuery(
    queryKey,
    () => MyPageApi.myComment(),
    params?.options
  );
  return { ...query, queryKey };
}
