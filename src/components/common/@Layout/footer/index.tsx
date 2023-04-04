import { Box, Divider, Flex, Text } from "@chakra-ui/react";

import Logo from "components/common/@Icons/System/Logo";

const HomeFooter = () => {
  const data = [
    {
      name: "(주)낫머글",
      representative: "석보라",
      address: "서울특별시 성동구 왕십리로 125, 5층 511호(성수동1가, KD타워)",
      businessNumber: "311-88-02319",
      phoneNumber: "02-2039-2770",
    },
  ];

  return (
    <Flex
      border="1px solid #E5E7EC"
      bg="gray.100"
      mt="30px"
      justifyContent="center"
    >
      <Box w="100%" p="40px 16px">
        <Flex direction="column">
          <Logo
            w={{ base: "100px", sm: "140px" }}
            h={{ base: "32px", sm: "44px" }}
          />
          <Divider bg="gray.400" w="100%" h="1px" my="40px" />
          <Flex
            direction={{ base: "column", sm: "row" }}
            alignItems={{ base: "normal", sm: "center" }}
          >
            <Text fontWeight="400" fontSize="12px" color="gray.700">
              {data && data[0]?.name}
            </Text>
            <Divider
              display={{ base: "none", sm: "block" }}
              orientation="vertical"
              w="1px"
              h="8px"
              bg="gray.400"
              mx="10px"
            />
            <Text fontWeight="400" fontSize="12px" color="gray.700">
              대표자:{data && data[0]?.representative}
            </Text>
            <Divider
              display={{ base: "none", sm: "block" }}
              orientation="vertical"
              w="1px"
              h="8px"
              bg="gray.400"
              mx="10px"
            />
            <Text fontWeight="400" fontSize="12px" color="gray.700">
              {data && data[0]?.address}
            </Text>
            <Divider
              display={{ base: "none", sm: "block" }}
              orientation="vertical"
              w="1px"
              h="8px"
              bg="gray.400"
              mx="10px"
            />
            <Text fontWeight="400" fontSize="12px" color="gray.700">
              사업자등록번호:{data && data[0]?.businessNumber}
            </Text>
            <Divider
              display={{ base: "none", sm: "block" }}
              orientation="vertical"
              w="1px"
              h="8px"
              bg="gray.400"
              mx="10px"
            />
            <Text fontWeight="400" fontSize="12px" color="gray.700">
              TEL:{data && data[0]?.phoneNumber}
            </Text>
          </Flex>
          <Text mb="15px" fontWeight="400" fontSize="12px" color="gray.700">
            이메일 문의 : notmuggle21@socialhug.co.kr
          </Text>
          <Text fontSize="12px" fontWeight="400" color="gray.600">
            ⓒ 2022 Not Muggle Inc. All Right Reserved.
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HomeFooter;
