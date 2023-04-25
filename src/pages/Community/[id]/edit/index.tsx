import { useGetCommunityDetailQuery } from "apis/community/query";

import CommunityWriteComponent from "components/Community/write";
import { useParams } from "react-router-dom";

const CommunityEditPage = () => {
  const params = useParams();

  const { data, isLoading } = useGetCommunityDetailQuery({
    variables: params.id,
    options: {
      enabled: !!params.id,
    },
  });

  return !isLoading && data ? (
    <CommunityWriteComponent editData={data} isEdit />
  ) : (
    <>데이터가 없습니다.</>
  );
};

export default CommunityEditPage;
