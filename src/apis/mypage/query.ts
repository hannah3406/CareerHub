import { QueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";
import { useQuery } from "react-query";
import { getAccessToken } from "utils/sessionStorage/token";

import MyPageApi from ".";

export const MYPAGE_API_QUERY_KEY = {
  GET_MY_BOARD: (token: string | null) => [
    QUERY_KEY.MYPAGE.GET_MY_BOARD,
    token,
  ],
  GET_MY_COMMENT: (token: string | null) => [
    QUERY_KEY.MYPAGE.GET_MY_COMMENT,
    token,
  ],
};

export function useGetMyArticleQuery(
  params?: QueryHookParams<typeof MyPageApi.myBoard>
) {
  const token = getAccessToken();
  const queryKey = MYPAGE_API_QUERY_KEY.GET_MY_BOARD(token);
  console.log(queryKey, "queryKey");
  const query = useQuery(queryKey, () => MyPageApi.myBoard(), params?.options);
  return { ...query, queryKey };
}
export function useGetMyCommentQuery(
  params?: QueryHookParams<typeof MyPageApi.myComment>
) {
  const token = getAccessToken();
  const queryKey = MYPAGE_API_QUERY_KEY.GET_MY_COMMENT(token);
  const query = useQuery(
    queryKey,
    () => MyPageApi.myComment(),
    params?.options
  );
  return { ...query, queryKey };
}
