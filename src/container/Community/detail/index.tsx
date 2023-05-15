import { Flex, Box } from "@chakra-ui/react";
import { CommunityList } from "apis/community/type";
import { ArrowBackIcon } from "@chakra-ui/icons";
import CommentWrtieComponent from "components/Comment/write";

import { useNavigate } from "react-router-dom";
import ROUTES from "constants/routes";
import CommunityDetailComponent from "components/Community/detail";
import CommentListComponent from "components/Comment/list";
import { BoardCommentList } from "apis/comment/type";

interface ICommunityDetailProps {
  boardDetail: CommunityList;
  boardComments: BoardCommentList[];
}

const CommunityDetailContainer = (props: ICommunityDetailProps) => {
  const { boardDetail, boardComments } = props;
  const navigate = useNavigate();

  return boardDetail === null ? (
    <Flex
      w="900px"
      h="40vh"
      border="1px solid #ddd"
      borderRadius="10px"
      m="35px auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box fontFamily="Arita-dotum-Medium">
        삭제되었거나, 존재하지 않는 게시글 입니다.
      </Box>
    </Flex>
  ) : (
    <>
      <Flex
        flexDirection="column"
        w="900px"
        p="20px 0 40px 0"
        border="1px solid #ddd"
        borderRadius="10px"
        m="35px auto 0"
      >
        <Box p="0px 40px" mb="20px">
          {boardDetail && <CommunityDetailComponent data={boardDetail} />}
        </Box>
        {boardComments && boardComments.length > 0 && (
          <Box p="0px 40px" my="15px">
            <CommentListComponent boardComment={boardComments} />
          </Box>
        )}

        <Box px="40px">
          <CommentWrtieComponent
            title={boardDetail.title}
            boardId={boardDetail._id}
          />
        </Box>
      </Flex>
      <Box w="900px" m="10px auto 35px">
        <Box
          cursor="pointer"
          onClick={() => navigate(ROUTES.COMMUNITY_LIST.path)}
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
export default CommunityDetailContainer;
