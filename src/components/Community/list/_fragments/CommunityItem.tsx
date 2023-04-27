import { CommunityList } from "apis/community/type";
import { Flex, Box, Text } from "@chakra-ui/react";
import PositionArticleCard from "components/common/PositionArticleCard";
import SkillTag from "components/common/SkillTag";
import { useNavigate } from "react-router-dom";
import ROUTES from "constants/routes";
import CommunityCardHeader from "components/common/community/CommunityCardHeader";
import CommunityCardFooter from "components/common/community/CommunityCardFooter";

interface ICommunityItemProps {
  data: CommunityList;
}

const CommunityItem = ({ data }: ICommunityItemProps) => {
  const navigate = useNavigate();

  return (
    <Flex
      flexDirection="column"
      w="100%"
      border="1px solid #ddd"
      p="10px 40px"
      borderRadius="10px"
      m="10px 0"
      cursor="pointer"
      onClick={() => {
        navigate(`${ROUTES.COMMUNITY_LIST.path}/${data._id}`);
      }}
    >
      <CommunityCardHeader
        profileImg={data.userInfo.profileimg}
        userName={data.userInfo.userName}
        updatedAt={data.updatedAt}
      />

      <Box fontWeight="bold" fontSize="18px" p="10px 0">
        {data.title}
      </Box>
      <Text whiteSpace="pre" color="#555" noOfLines={1}>
        {data.description}
      </Text>
      {data.positionArticle && (
        <PositionArticleCard
          url={data.positionArticle.url}
          company={data.positionArticle.company}
          title={data.positionArticle.title}
        />
      )}
      {data.skill && (
        <Flex alignItems="center" pt="10px" flexWrap="wrap">
          {data.skill.slice(0, 10).map((el, idx) => (
            <SkillTag key={idx} skill={el} />
          ))}
        </Flex>
      )}
      <CommunityCardFooter commentCnt={data.commentCnt} />
    </Flex>
  );
};
export default CommunityItem;
