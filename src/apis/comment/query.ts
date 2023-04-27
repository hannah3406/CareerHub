import { QueryHookParams } from "apis/type";
import { QUERY_KEY } from "constants/query-keys";

import { useQuery } from "react-query";
import commentApi from ".";

export const COMMENT_API_QUERY_KEY = {
  GET_BOARD_COMMENTS: (boardId: string | undefined) => [
    QUERY_KEY.COMMENT.GET_BOARD_COMMENTS,
    boardId,
  ],
};

export function useGetBoardCommentQuery(
  params: QueryHookParams<typeof commentApi.getCommentById>
) {
  const queryKey = COMMENT_API_QUERY_KEY.GET_BOARD_COMMENTS(params.variables);

  const query = useQuery(
    queryKey,
    () => commentApi.getCommentById(params.variables),
    params?.options
  );
  return { ...query, queryKey };
}
