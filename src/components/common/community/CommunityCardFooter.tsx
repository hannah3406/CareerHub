import { LikeFilled, LikeOutlined, MessageFilled } from "@ant-design/icons";
import { Box, Flex, Tooltip } from "@chakra-ui/react";
import DotIcon from "../@Icons/System/Dot";

interface ICommunityCardFooterProps {
  commentCnt: number;
  likeCnt: number;
  isLikeState: boolean;
  isLikeBoard: () => Promise<void>;
}
const CommunityCardFooter = ({
  likeCnt,
  commentCnt,
  isLikeState,
  isLikeBoard,
}: ICommunityCardFooterProps) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" pt="10px">
      <Flex alignItems="center" p="5px 0">
        <Tooltip label="좋아요">
          <Flex alignItems="center">
            {isLikeState ? (
              <LikeFilled
                onClick={isLikeBoard}
                style={{
                  color: "#D89999",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              />
            ) : (
              <LikeOutlined
                onClick={isLikeBoard}
                style={{
                  color: "#555",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              />
            )}

            <Box color="#555" fontSize="9px" ml="3px" pt="2px">
              {likeCnt}
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
