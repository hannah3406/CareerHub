import { useGetCommunityDetailQuery } from "apis/community/query";
import CommunityDetailContainer from "container/Community/detail";

import { useParams } from "react-router-dom";

const CommunityDetailPage = () => {
  const params = useParams();

  const { data, isLoading } = useGetCommunityDetailQuery({
    variables: params.id,
    options: {
      enabled: !!params.id,
    },
  });
  console.log();
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
