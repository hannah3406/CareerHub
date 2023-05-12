import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import LOGO from "assets/icon/LOGO5_DARK.png";
import SLOGAN_FOOTER from "assets/icon/SLOGAN_DARK.png";
const HomeFooter = () => {
  const data = [
    {
      name: "Hannah",
      github_address: "https://github.com/hannah3406",
      notion_url: "https://www.notion.so/5c4bdc263a364d939872affe001bcd79",
    },
  ];

  return (
    <Box w="100%" border="1px solid #E5E7EC" bg="#000" justifyContent="center">
      <Flex maxW="1200px" m="0 auto">
        <Box w="100%" p={{ base: "15px 10px", sm: "40px 16px" }}>
          <Flex direction="column">
            <Flex
              flexDir={{ base: "column", sm: "row" }}
              alignItems={{ base: "start", sm: "end" }}
              justifyContent="space-between"
            >
              <LOGOIMG>
                <img src={LOGO} alt="logo" />
              </LOGOIMG>
              <SLOGANIMG>
                <img src={SLOGAN_FOOTER} alt="slogan" />
              </SLOGANIMG>
            </Flex>

            <Divider bg="#fff" w="100%" h="1px" my="20px" />
            <Flex
              direction={{ base: "column", sm: "row" }}
              alignItems={{ base: "normal", sm: "center" }}
            >
              <Text fontWeight="500" fontSize="12px" color="#fff">
                {data && data[0]?.name}
              </Text>
              <Divider
                display={{ base: "none", sm: "block" }}
                orientation="vertical"
                w="1px"
                h="8px"
                bg="#fff"
                mx="10px"
              />
              <Text fontWeight="500" fontSize="12px" color="#fff">
                깃주소 {data && data[0]?.github_address}
              </Text>
              <Divider
                display={{ base: "none", sm: "block" }}
                orientation="vertical"
                w="1px"
                h="8px"
                bg="#fff"
                mx="10px"
              />
              <Text fontWeight="500" fontSize="12px" color="#fff">
                노션 {data && data[0]?.notion_url}
              </Text>
            </Flex>
            <Text mb="15px" fontWeight="400" fontSize="12px" color="#fff">
              이메일 문의 : hajung3406@naver.com
            </Text>
            <Text fontSize="12px" fontWeight="400" color="gray.600">
              ⓒ 2023 Hannah. All Right Reserved.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeFooter;
const LOGOIMG = styled.div`
  width: 140px;
  height: 30px;
  overflow: hidden;
  margin: 5px 0;
  > img {
    width: 100%;
    height: 100%;
  }
`;
const SLOGANIMG = styled.div`
  width: 500px;
  height: 20px;
  margin: 5px 0;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
  }
`;
