import { Flex, Text, Box } from "@chakra-ui/react";

import { CommunityList } from "apis/community/type";
import PositionArticleCard from "components/common/PositionArticleCard";
import SkillTag from "components/common/SkillTag";

import CommunityCardHeader from "components/common/community/CommunityCardHeader";
import CommunityCardFooter from "components/common/community/CommunityCardFooter";

interface ICommunityDetailProps {
  data: CommunityList;
  deleteBoard: () => Promise<void>;
}

const CommunityDetailComponent = (props: ICommunityDetailProps) => {
  const { data } = props;

  return (
    <Box p="0px 40px">
      <CommunityCardHeader
        profileImg={data.userInfo.profileimg}
        userName={data.userInfo.userName}
        updatedAt={data.updatedAt}
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
      <CommunityCardFooter commentCnt={data.commentCnt} />
    </Box>
  );
};
export default CommunityDetailComponent;
