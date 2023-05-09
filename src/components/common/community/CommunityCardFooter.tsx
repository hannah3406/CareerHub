import {
  EyeFilled,
  LikeFilled,
  LikeOutlined,
  MessageFilled,
} from "@ant-design/icons";
import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { Popover } from "antd";
import communityApi from "apis/community";
import { QUERY_KEY } from "constants/query-keys";
import ROUTES from "constants/routes";
import { useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import DotIcon from "../@Icons/System/Dot";
import DotMoreIcon from "../@Icons/System/DotMore";

interface ICommunityCardFooterProps {
  commentCnt: number;
  likeCnt: number;
  review: number;
  isLikeState: boolean;
  isLikeBoard: () => Promise<void>;
  isWriter?: boolean;
  isDetail?: boolean;
  boardId?: string;
}
const CommunityCardFooter = ({
  likeCnt,
  commentCnt,
  isLikeState,
  isLikeBoard,
  isWriter,
  boardId,
  review,
  isDetail,
}: ICommunityCardFooterProps) => {
  const navigate = useNavigate();
  const params = useParams();
  const queryClient = useQueryClient();
  const goEditPage = () => {
    navigate(`${ROUTES.COMMUNITY_LIST.path}/${boardId}/edit`);
  };
  const deleteBoard = async () => {
    try {
      await communityApi.deleteBoard(params.id);
      alert("게시글이 삭제되었습니다.");
      await queryClient.invalidateQueries([QUERY_KEY.COMMUNITY.GETLIST]);
      navigate(ROUTES.COMMUNITY_LIST.path);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      p="10px 20px 0 20px"
      w="100%"
      left={isDetail ? "0" : "20px"}
      position="absolute"
      bottom={isDetail ? "5px" : "10px"}
    >
      <Flex alignItems="center" p="5px 0">
        <Tooltip label="조회수">
          <Flex alignItems="center">
            <EyeFilled
              style={{
                color: "#555",
                fontSize: "12px",
              }}
            />
            <Box color="#555" fontSize="9px" ml="3px" pt="2px">
              {review}
            </Box>
          </Flex>
        </Tooltip>
        <DotIcon fontSize="2px" mx="7px" color="#555" />
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
      {isWriter && isDetail && (
        <Popover
          trigger="click"
          content={
            <Box p="10px 0">
              <Box
                cursor="pointer"
                p="3px 15px"
                _hover={{
                  bg: "#555",
                  color: "#fff",
                }}
                onClick={goEditPage}
              >
                수정하기
              </Box>
              <Box
                cursor="pointer"
                p="3px 15px"
                _hover={{
                  bg: "#555",
                  color: "#fff",
                }}
                onClick={deleteBoard}
              >
                삭제하기
              </Box>
            </Box>
          }
        >
          <DotMoreIcon w="5px" color="#555" ml="1px" />
        </Popover>
      )}
    </Flex>
  );
};

export default CommunityCardFooter;
