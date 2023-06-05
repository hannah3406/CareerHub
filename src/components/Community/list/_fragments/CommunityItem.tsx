import { CommunityList } from "apis/community/type";
import { Flex, Box, Text } from "@chakra-ui/react";
import PositionArticleCard from "components/common/PositionArticleCard";
import SkillTag from "components/common/SkillTag";
import { useNavigate } from "react-router-dom";
import ROUTES from "constants/routes";
import CommunityCardHeader from "components/common/community/CommunityCardHeader";
import CommunityCardFooter from "components/common/community/CommunityCardFooter";
import { useQueryClient } from "react-query";
import { getAccessToken } from "utils/sessionStorage/token";
import { QUERY_KEY } from "constants/query-keys";
import { userProfile as userType } from "apis/user/type";
interface ICommunityItemProps {
  data: CommunityList;
  sliderMode?: boolean;
}

const CommunityItem = ({ data, sliderMode }: ICommunityItemProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const token = getAccessToken();
  const userProfile = queryClient.getQueryData<userType>([
    QUERY_KEY.USER.PROFILE,
    token,
  ]);
  const isLikeBoard = async () => {
    return;
  };
  return (
    <Flex
      flexDirection="column"
      position="relative"
      w="100%"
      h={sliderMode ? "250px" : "100%"}
      border="1px solid #ddd"
      p="10px 40px 50px 40px"
      borderRadius="10px"
      m="10px 0"
      bg="#fff"
      boxShadow={sliderMode ? "md" : "none"}
      cursor="pointer"
      onClick={() => {
        navigate(`${ROUTES.COMMUNITY_LIST.path}/${data._id}`);
      }}
    >
      <CommunityCardHeader
        profileImg={data.userInfo.profileimg}
        userName={data.userInfo.userName}
        updatedAt={data.createdAt}
      />

      <Box fontWeight="bold" fontSize="18px" p="10px 0">
        {data.title}
      </Box>
      <Text whiteSpace="pre" color="#555" noOfLines={1} lineHeight="18px">
        {data.description}
      </Text>
      {data.positionArticle && (
        <PositionArticleCard
          sliderMode={sliderMode}
          url={data.positionArticle.url}
          company={data.positionArticle.company}
          title={data.positionArticle.title}
        />
      )}
      {data.skill && (
        <Flex alignItems="center" pt="10px" flexWrap="wrap">
          {sliderMode ? (
            <>
              {data.skill.slice(0, 5).map((el, idx) => (
                <SkillTag key={idx} skill={el} />
              ))}
            </>
          ) : (
            <>
              {data.skill.slice(0, 10).map((el, idx) => (
                <SkillTag key={idx} skill={el} />
              ))}
            </>
          )}
        </Flex>
      )}
      {data && (
        <CommunityCardFooter
          view={data.view}
          isLikeBoard={isLikeBoard}
          isLikeState={userProfile && data.like.includes(userProfile._id)}
          likeCnt={data.like.length}
          commentCnt={data.commentCnt}
        />
      )}
    </Flex>
  );
};
export default CommunityItem;
