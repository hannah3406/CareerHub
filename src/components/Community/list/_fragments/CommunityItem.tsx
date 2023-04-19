import { CommunityList } from "apis/\bcommunity/type";
import { LikeOutlined, MessageFilled } from "@ant-design/icons";
import { ViewIcon } from "@chakra-ui/icons";
import { Flex, Box, Text, Tooltip } from "@chakra-ui/react";
import DotIcon from "components/common/@Icons/System/Dot";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import moment from "moment";
import PositionArticleCard from "components/common/PositionArticleCard";

interface ICommunityItemProps {
  data: CommunityList;
}

const CommunityItem = ({ data }: ICommunityItemProps) => {
  const [date, setDate] = useState<string | undefined>(undefined);
  useEffect(() => {
    const local = moment.utc(data.updatedAt).toDate();
    setDate(moment(local).fromNow());
  }, [data]);

  return (
    <Flex
      flexDirection="column"
      w="100%"
      border="1px solid #ddd"
      p="10px 40px"
      borderRadius="10px"
      m="10px 0"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" p="5px 0">
          <ProfileImg>
            <img
              src={`assets/image/profile/파일 ${
                Number(data.userInfo.profileimg) + 1
              }.svg`}
              alt="homeheader_profile"
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

      <Box fontWeight="bold" fontSize="18px" p="10px 0">
        {data.title}
      </Box>
      <Text whiteSpace="pre" color="#555" noOfLines={2}>
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
            <Box
              key={idx}
              mr="7px"
              mb="7px"
              fontSize="12px"
              borderRadius="10px"
              bg="#ffe6e6"
              border="1px solid #d89999"
              p="3px 10px"
              fontWeight="600"
            >
              #{el}
            </Box>
          ))}
        </Flex>
      )}

      <Flex alignItems="center" justifyContent="space-between" pt="10px">
        <Flex alignItems="center" p="5px 0">
          <Tooltip label="조회수">
            <Flex alignItems="center">
              <ViewIcon color="#555" cursor="pointer" />
              <Box color="#555" fontSize="9px" ml="3px" pt="2px">
                110
              </Box>
            </Flex>
          </Tooltip>
          <DotIcon fontSize="3px" mx="7px" color="#555" />
          <Tooltip label="좋아요">
            <Flex alignItems="center">
              <LikeOutlined
                style={{
                  color: "#555",
                  fontSize: "12px",
                }}
              />
              <Box color="#555" fontSize="9px" ml="3px" pt="2px">
                0
              </Box>
            </Flex>
          </Tooltip>
          <DotIcon fontSize="2px" mx="7px" color="#555" />
          <Tooltip label="댓글">
            <Flex alignItems="center">
              <MessageFilled
                style={{
                  color: "#555",
                  fontSize: "12px",
                }}
              />
              <Box color="#555" fontSize="9px" ml="3px" pt="2px">
                100
              </Box>
            </Flex>
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default CommunityItem;

const ProfileImg = styled.div`
  width: 28px;
  height: 28px;
  overflow: hidden;
  border-radius: 50%;
  > img {
    width: 100%;
  }
`;
