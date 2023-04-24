import { Flex, Text, Box, Tooltip, Divider } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { CommunityList } from "apis/\bcommunity/type";
import { ArrowBackIcon, ViewIcon } from "@chakra-ui/icons";
import PositionArticleCard from "components/common/PositionArticleCard";
import SkillTag from "components/common/SkillTag";
import moment from "moment";
import { useEffect, useState } from "react";
import { LikeOutlined, MessageFilled } from "@ant-design/icons";
import CommentWrtieComponent from "components/Comment/write";
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
    <>
      <Flex
        flexDirection="column"
        w="900px"
        p="20px 0 40px 0"
        border="1px solid #ddd"
        borderRadius="10px"
        m="35px auto 0"
      >
        <Box p="0px 40px">
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
          <Flex alignItems="center" justifyContent="space-between" pt="10px">
            <Flex alignItems="center" p="5px 0">
              <Tooltip label="조회수">
                <Flex alignItems="center">
                  <ViewIcon color="#555" cursor="pointer" />
                  <Box color="#555" fontSize="12px" ml="5px" pt="2px">
                    110
                  </Box>
                </Flex>
              </Tooltip>
              <Tooltip label="좋아요">
                <Flex alignItems="center" m="0 20px">
                  <LikeOutlined
                    style={{
                      color: "#555",
                      fontSize: "15px",
                    }}
                  />
                  <Box color="#555" fontSize="12px" ml="5px" pt="2px">
                    0
                  </Box>
                </Flex>
              </Tooltip>
              <Tooltip label="댓글">
                <Flex alignItems="center">
                  <MessageFilled
                    style={{
                      color: "#555",
                      fontSize: "15px",
                    }}
                  />
                  <Box color="#555" fontSize="12px" ml="5px" pt="2px">
                    100
                  </Box>
                </Flex>
              </Tooltip>
            </Flex>
          </Flex>
        </Box>

        <Divider my="20px" />
        <Box px="40px">
          <CommentWrtieComponent />
        </Box>
      </Flex>
      <Box w="900px" m="10px auto 35px">
        <Box
          cursor="pointer"
          onClick={() => window.history.back()}
          display="inline-block"
          border="1px solid #ddd"
          fontSize="14px"
          fontWeight="bold"
          p="5px 10px"
          borderRadius="10px"
        >
          <ArrowBackIcon mr="5px" />
          목록으로
        </Box>
      </Box>
    </>
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
