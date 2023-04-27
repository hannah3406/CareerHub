import { Flex } from "@chakra-ui/react";
import { BoardCommentList } from "apis/comment/type";
import CommentListItem from "./_fragment/CommentListItem";

interface ICommentListComponentProps {
  boardComment: BoardCommentList[];
}

const CommentListComponent = ({ boardComment }: ICommentListComponentProps) => {
  return (
    <Flex flexDir="column">
      {boardComment.map((comment) => (
        <CommentListItem key={comment._id} comment={comment} />
      ))}
    </Flex>
  );
};
export default CommentListComponent;
