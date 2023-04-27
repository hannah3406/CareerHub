import { BoardCommentList } from "apis/comment/type";
import CommunityCardHeader from "components/common/community/CommunityCardHeader";
import { Text, Box } from "@chakra-ui/react";
interface ICommentListItemProps {
  comment: BoardCommentList;
}

const CommentListItem = ({ comment }: ICommentListItemProps) => {
  const { userInfo, updatedAt, contents } = comment;
  return (
    <Box p="3px 40px" m="5px 0" border="1px solid #eee" boxShadow="sm">
      <CommunityCardHeader
        profileImg={userInfo.profileimg}
        userName={userInfo.userName}
        updatedAt={updatedAt}
      />
      <Text whiteSpace="pre-wrap" color="#555" p="5px 0" w="100%">
        {contents}
      </Text>
    </Box>
  );
};
export default CommentListItem;
