import { Box, Flex, Text } from "@chakra-ui/react";
import { PositionList } from "apis/webcrawling/type";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { PositionArtice, positionArticleState } from "recoil/position";

interface IPositionItemProps {
  data: PositionList;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PositionItem = (props: IPositionItemProps) => {
  const { data, setShow } = props;
  const [date, setDate] = useState<string | undefined>(undefined);
  const setPositionArticle =
    useSetRecoilState<PositionArtice>(positionArticleState);

  useEffect(() => {
    const local = moment.utc(data.updatedAt).toDate();
    setDate(moment(local).format("YYYY.MM.DD"));
  }, [data]);

  const onSelectArticle = (data: PositionList) => {
    const { _id, url, title, company, skill } = data;
    setPositionArticle({ positionId: _id, url, title, company, skill });
    setShow(false);
  };
  return (
    <>
      <Flex
        flexDirection="column"
        w="100%"
        mt="3px"
        cursor="pointer"
        _hover={{
          bg: "#eee",
        }}
        onClick={() => {
          onSelectArticle(data);
        }}
      >
        <Flex justifyContent="flex-start" alignItems="top" p="10px 20px">
          <Flex justifyContent="flex-start" alignItems="center" w="20%">
            <Box
              w="32%"
              display="inline-block"
              fontSize="9px"
              fontWeight="bold"
              color={data.type === "wanted" ? "#fff" : "#000"}
              textAlign="center"
              borderRadius="5px"
              bg={data.type === "wanted" ? "#36f" : "rgb(0, 221, 109)"}
            >
              {data.type}
            </Box>
            <Box
              w="68%"
              ml="6px"
              fontSize="13px"
              noOfLines={1}
              fontWeight="bold"
              color="gray.700"
            >
              {data.company}
            </Box>
          </Flex>
          <Box
            p="0 20px"
            fontSize="15px"
            noOfLines={1}
            fontWeight="bold"
            w="75%"
          >
            {data.title}
          </Box>
          <Text display="inline-block" textStyle="sm" color="#666">
            {date}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
export default PositionItem;
