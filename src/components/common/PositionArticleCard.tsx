import { Box, Flex, Tooltip } from "@chakra-ui/react";
interface IPositionArticleCardProps {
  url: string;
  company: string;
  title: string;
}
const PositionArticleCard = ({
  url,
  company,
  title,
}: IPositionArticleCardProps) => {
  return (
    <Tooltip label="공고 바로가기">
      <Flex
        as="a"
        cursor="pointer"
        target="_blank"
        href={url}
        alignItems="center"
        m="10px"
        ml="0"
        w="85%"
        border="1px solid #ddd"
        transition=".3s"
        _hover={{
          boxShadow: "md",
        }}
      >
        <Box
          w="20%"
          fontWeight="bold"
          fontSize="12px"
          textAlign="center"
          bg="primary.500"
          p="5px"
          noOfLines={2}
        >
          {company}
        </Box>
        <Box w="80%" fontSize="12px" p="5px" noOfLines={1}>
          {title}
        </Box>
      </Flex>
    </Tooltip>
  );
};
export default PositionArticleCard;
