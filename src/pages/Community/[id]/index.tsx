import communityApi from "apis/community";
import { useGetCommunityDetailQuery } from "apis/community/query";
import { QUERY_KEY } from "constants/query-keys";
import CommunityDetailContainer from "container/Community/detail";
import { useEffect } from "react";
import { useQueryClient } from "react-query";

import { useParams } from "react-router-dom";

const CommunityDetailPage = () => {
  const params = useParams();
  const { id } = params;
  const queryClient = useQueryClient();
  const { data, isLoading } = useGetCommunityDetailQuery({
    variables: id,
    options: {
      enabled: !!id,
    },
  });

  const getViewCount = async (id: string) => {
    try {
      const result = await communityApi.getViewCountById(id);
      await queryClient.invalidateQueries([
        QUERY_KEY.COMMUNITY.GETARTICLE,
        params.id,
      ]);
      await queryClient.invalidateQueries([QUERY_KEY.COMMUNITY.GETLIST]);

      return result;
    } catch (e) {}
  };
  useEffect(() => {
    if (!!id && data && data.boardDetail) {
      getViewCount(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, data]);
  return !isLoading && data ? (
    <CommunityDetailContainer
      boardDetail={data.boardDetail}
      boardComments={data.boardComments}
    />
  ) : (
    <>데이터가 없습니다.</>
  );
};

export default CommunityDetailPage;
