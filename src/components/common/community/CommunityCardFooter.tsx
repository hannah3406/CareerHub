import { LikeOutlined, MessageFilled } from "@ant-design/icons";
import { ViewIcon } from "@chakra-ui/icons";
import { Box, Flex, Tooltip } from "@chakra-ui/react";
import DotIcon from "../@Icons/System/Dot";
interface ICommunityCardFooterProps {
  commentCnt: number;
}
const CommunityCardFooter = ({ commentCnt }: ICommunityCardFooterProps) => {
  return (
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
              {commentCnt}
            </Box>
          </Flex>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default CommunityCardFooter;
