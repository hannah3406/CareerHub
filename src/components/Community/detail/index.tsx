import { Flex, Text, Box } from "@chakra-ui/react";

import { CommunityList } from "apis/community/type";
import PositionArticleCard from "components/common/PositionArticleCard";
import SkillTag from "components/common/SkillTag";
import { userProfile as userType } from "apis/user/type";
import CommunityCardHeader from "components/common/community/CommunityCardHeader";
import CommunityCardFooter from "components/common/community/CommunityCardFooter";
import { useQueryClient } from "react-query";
import { getToken } from "utils/sessionStorage/token";
import { QUERY_KEY } from "constants/query-keys";
import communityApi from "apis/community";

interface ICommunityDetailProps {
  data: CommunityList;
}

const CommunityDetailComponent = (props: ICommunityDetailProps) => {
  const { data } = props;
  const queryClient = useQueryClient();
  const token = getToken();

  const userProfile = queryClient.getQueryData<userType>([
    QUERY_KEY.USER.PROFILE,
    token,
  ]);
  const isLikeBoard = async () => {
    const result = await communityApi.likeBoard(data._id);
    console.log(result);
    await queryClient.invalidateQueries([
      QUERY_KEY.COMMUNITY.GETARTICLE,
      data._id,
    ]);
    await queryClient.invalidateQueries([QUERY_KEY.COMMUNITY.GETLIST]);
    await queryClient.invalidateQueries([QUERY_KEY.RECOMMEND.GETLIST]);
  };

  return (
    <Box p="10px 20px 50px 20px" position="relative" w="100%">
      <CommunityCardHeader
        profileImg={data.userInfo.profileimg}
        userName={data.userInfo.userName}
        updatedAt={data.createdAt}
      />
      <Box fontWeight="bold" fontSize="18px" p="20px 0 0">
        {data.title}
      </Box>
      {data.skill && (
        <Flex alignItems="center" p="10px 0" flexWrap="wrap">
          {data.skill.slice(0, 10).map((el, idx) => (
            <SkillTag key={idx} skill={el} />
          ))}
        </Flex>
      )}
      <Text whiteSpace="pre-wrap" color="#555" p="20px 0" w="100%">
        {data.description}
      </Text>
      {data.positionArticle && (
        <PositionArticleCard
          url={data.positionArticle.url}
          company={data.positionArticle.company}
          title={data.positionArticle.title}
        />
      )}
      {userProfile && data && (
        <CommunityCardFooter
          boardId={data._id}
          isDetail
          isLikeBoard={isLikeBoard}
          isLikeState={data.like.includes(userProfile._id)}
          likeCnt={data.like.length}
          commentCnt={data.commentCnt}
          isWriter={data.userInfo.userId === userProfile?._id}
        />
      )}
    </Box>
  );
};
export default CommunityDetailComponent;
