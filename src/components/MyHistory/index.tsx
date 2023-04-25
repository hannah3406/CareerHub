import { Text, Flex } from "@chakra-ui/react";
import { myArticle } from "apis/user/type";
import ROUTES from "constants/routes";
import moment from "moment";
import { useNavigate } from "react-router-dom";

interface IMyHistoryComponentProps {
  data: myArticle[];
}

const MyHistoryComponent = ({ data }: IMyHistoryComponentProps) => {
  const navigate = useNavigate();
  return (
    <Flex w="100%" flexWrap="wrap" justifyContent="space-between">
      {data.map((article) => (
        <Flex
          w="49%"
          key={article._id}
          flexDirection="column"
          p="10px 30px"
          m="8px 0"
          borderRadius="5px"
          border="1px solid #ddd"
          cursor="pointer"
          boxShadow="md"
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
          <Text textAlign="right" fontSize="12px" fontWeight="bold">
            {moment(article.updatedAt).fromNow()}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};
export default MyHistoryComponent;
