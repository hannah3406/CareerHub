import { WarningTwoIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

const TemporarilyComponent = () => {
  return (
    <Flex
      h="100%"
      justifyContent={{ base: "flex-start", sm: "center" }}
      alignItems="flex-start"
      bg="background.secondary"
      borderTop="1px solid"
      borderColor="gray.200"
    >
      <Flex
        w={{ base: "100%", sm: "60%" }}
        flexDir="column"
        alignItems="center"
        mt="50px"
        p={{ base: "36px 30px", sm: "60px 40px" }}
      >
        <WarningTwoIcon w="50px" h="50px" m="20px 0" />
        <Text color="#000" fontSize="18px">
          현재 서비스 점검중입니다.
        </Text>
        <Text color="gray.500" fontSize="16px">
          이용에 불편을 드려 죄송합니다.
        </Text>
      </Flex>
    </Flex>
  );
};

export default TemporarilyComponent;
