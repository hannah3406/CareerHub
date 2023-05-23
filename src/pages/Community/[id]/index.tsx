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
      return communityApi.getViewCountById(id);
    } catch (e: any) {
      console.log(e.status, e.message);
    }
  };

  useEffect(() => {
    if (!!id && data && data.boardDetail) {
      getViewCount(id);
      queryClient.invalidateQueries([QUERY_KEY.COMMUNITY.GETLIST]);
    }
  }, [id, data, queryClient, params]);

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
