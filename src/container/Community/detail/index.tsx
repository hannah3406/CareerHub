import { Flex, Box } from "@chakra-ui/react";
import { CommunityList } from "apis/community/type";
import { ArrowBackIcon } from "@chakra-ui/icons";
import CommentWrtieComponent from "components/Comment/write";

import { useQueryClient } from "react-query";
import { QUERY_KEY } from "constants/query-keys";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "constants/routes";
import communityApi from "apis/community";
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
  const params = useParams();
  const queryClient = useQueryClient();

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
          {boardDetail && (
            <CommunityDetailComponent
              data={boardDetail}
              deleteBoard={deleteBoard}
            />
          )}
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
