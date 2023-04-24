import { Flex, Text, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { CommunityList } from "apis/\bcommunity/type";
import PositionArticleCard from "components/common/PositionArticleCard";
import SkillTag from "components/common/SkillTag";
import moment from "moment";
import { useEffect, useState } from "react";
interface ICommunityDetailProps {
  data: CommunityList;
}

const CommunityDetailComponent = (props: ICommunityDetailProps) => {
  const { data } = props;
  const [date, setDate] = useState<string | undefined>(undefined);
  useEffect(() => {
    const local = moment.utc(data.updatedAt).toDate();
    setDate(moment(local).fromNow());
  }, [data]);
  console.log(data, "data");
  return (
    <Flex
      flexDirection="column"
      w="900px"
      border="1px solid #ddd"
      p="20px 40px 40px"
      borderRadius="10px"
      m="35px auto"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" p="5px 0">
          <ProfileImg>
            <img
              src={
                process.env.PUBLIC_URL +
                `/assets/image/profile/파일 ${
                  Number(data.userInfo.profileimg) + 1
                }.svg`
              }
              alt="프로필"
            />
          </ProfileImg>
          <Box fontSize="14px" margin="0 5px">
            {data.userInfo.userName}
          </Box>
        </Flex>
        <Text fontSize="12px" color="#555">
          {date}
        </Text>
      </Flex>

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
    </Flex>
  );
};
export default CommunityDetailComponent;
const ProfileImg = styled.div`
  width: 28px;
  height: 28px;
  overflow: hidden;
  border-radius: 50%;
  > img {
    width: 100%;
  }
`;
