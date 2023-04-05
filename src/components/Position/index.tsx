import { Box, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { PositionList } from "apis/webcrawling/type";
interface IPositionComponentProps {
  data?: PositionList[];
}
const PositionComponent = (props: IPositionComponentProps) => {
  const { data } = props;
  return (
    <Flex flexDirection="column" w="900px" m="0 auto">
      {data &&
        data.map((data, idx) => (
          <Flex
            key={idx}
            justifyContent="space-between"
            align-items="center"
            w="100%"
            m="12px 0"
            p="20px"
            boxShadow="sm"
            cursor="pointer"
            border="1px solid #ddd"
            borderRadius="10px"
            transition=".3s"
            _hover={{
              boxShadow: "lg",
              transform: "translateY(-3px)",
            }}
          >
            <Flex flexDirection="column" w="100%">
              <Flex justifyContent="space-between" alignItems="top" mb="15px">
                <Flex justifyContent="flex-start" alignItems="center">
                  <Box
                    display="inline-block"
                    fontSize="10px"
                    fontWeight="bold"
                    color={data.url.includes("wanted") ? "#fff" : "#000"}
                    p="2px 8px"
                    borderRadius="8px"
                    bg={data.url.includes("wanted") ? "#d89999" : "#33d78d"}
                  >
                    {data.url.includes("wanted") ? "원티드" : "점핏"}
                  </Box>
                  <Box ml="5px" fontSize="14px" fontWeight="bold">
                    {data.company}
                  </Box>
                </Flex>

                <Text display="inline-block" textStyle="sm" color="#666">
                  2023.04.05
                </Text>
              </Flex>
              <Box
                fontWeight="bold"
                fontSize="18px"
                _hover={{ color: "primary.500" }}
              >
                {data.title}
              </Box>
              <Text display="inline-block" textStyle="sm" color="#666">
                {data.location}
              </Text>
              <Flex mt="20px" flexWrap="wrap">
                {data.skill.map((skill, index) => (
                  <SkillStyle key={index}>#{skill}</SkillStyle>
                ))}
              </Flex>
            </Flex>
          </Flex>
        ))}
    </Flex>
  );
};

export default PositionComponent;

const SkillStyle = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: #000;
  margin: 0px 5px 10px 0;
  text-align: center;
  padding: 3px 10px;
  border-radius: 10px;
  background-color: #ddd;
`;
