import { Text, Flex } from "@chakra-ui/react";
import { myBoard } from "apis/mypage/type";
import ROUTES from "constants/routes";
import moment from "moment";
import { useNavigate } from "react-router-dom";

interface IMyHistoryComponentProps {
  data: myBoard[];
}

const MyBoardComponent = ({ data }: IMyHistoryComponentProps) => {
  const navigate = useNavigate();
  return (
    <Flex w="100%" flexDir="column">
      {data.map((article) => (
        <Flex
          w="100%"
          flexDir="column"
          key={article._id}
          p="10px 30px"
          mt="8px"
          borderBottom="1px solid #eee"
          cursor="pointer"
          // boxShadow="md"
          onClick={() => {
            navigate(`${ROUTES.COMMUNITY_LIST.path}/${article._id}`);
          }}
          transition=".3s"
          _hover={{
            boxShadow: "lg",
          }}
        >
          <Text fontWeight="bold" color="#555" noOfLines={1}>
            {article.title}
          </Text>
          <Text fontSize="12px" fontWeight="bold">
            {moment(article.updatedAt).fromNow()}
          </Text>
        </Flex>
      ))}
      {data.length === 0 && (
        <Text color="#555" p="15px 0">
          작성한 게시글이 없습니다.
        </Text>
      )}
    </Flex>
  );
};
export default MyBoardComponent;
