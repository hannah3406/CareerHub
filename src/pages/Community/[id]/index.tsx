import { useGetCommunityDetailQuery } from "apis/community/query";
import CommunityDetailComponent from "components/Community/detail";
import { useParams } from "react-router-dom";

const CommunityDetailPage = () => {
  const params = useParams();

  const { data, isLoading } = useGetCommunityDetailQuery({
    variables: params.id,
    options: {
      enabled: !!params.id,
    },
  });

  return !isLoading && data ? (
    <CommunityDetailComponent data={data} />
  ) : (
    <>데이터가 없습니다.</>
  );
};

export default CommunityDetailPage;
