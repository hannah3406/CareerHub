import { Text, Flex } from "@chakra-ui/react";
import { myComment } from "apis/mypage/type";

import ArrowRight2Icon from "components/Common/@Icons/System/ArrowRight2";
import ROUTES from "constants/routes";
import moment from "moment";
import { useNavigate } from "react-router-dom";

interface IMyHistoryComponentProps {
  data: myComment[];
}

const MyCommentComponent = ({ data }: IMyHistoryComponentProps) => {
  const navigate = useNavigate();
  return (
    <Flex w="100%" flexDir="column" mt="4px">
      {data.map((comment, idx) => (
        <Flex
          w="100%"
          flexDir="column"
          key={idx}
          cursor="pointer"
          transition=".3s"
          _hover={{
            boxShadow: "lg",
          }}
          p="10px 30px"
          onClick={() => {
            navigate(
              `${ROUTES.COMMUNITY_LIST.path}/${comment.boardInfo.boardId}`
            );
          }}
          borderBottom="1px solid #eee"
        >
          <Text color="#000" noOfLines={1}>
            {comment.contents}
          </Text>
          <Text fontSize="12px" fontWeight="bold">
            {moment(comment.updatedAt).fromNow()}
          </Text>
          <Flex alignItems="center" bg="#eee">
            <ArrowRight2Icon />
            <Text fontSize="14px" color="#555" noOfLines={1}>
              {comment.boardInfo.title}
            </Text>
          </Flex>
        </Flex>
      ))}
      {data.length === 0 && (
        <Text color="#555" p="15px 0">
          작성한 댓글이 없습니다.
        </Text>
      )}
    </Flex>
  );
};
export default MyCommentComponent;
