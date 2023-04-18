import { Box, Flex, Text } from "@chakra-ui/react";
import ScrollUp from "components/common/@Icons/System/ScrollUp";
import PositionComponent from "components/Position";
import { useEffect } from "react";
import { useGetCommunityListQuery } from "apis/\bcommunity/query";
import CommunityComponent from "components/Community/list";
import { FormOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";

const CommunityContainer = () => {
  const navigete = useNavigate();
  const {
    data: position,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useGetCommunityListQuery({
    options: {
      enabled: true,
      getNextPageParam: (lastPage) => {
        if (lastPage.results.length < 10) return;
        return lastPage.page + 1;
      },
    },
  });

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (hasNextPage && scrollTop + clientHeight >= scrollHeight)
      return fetchNextPage();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Box>
      <Box
        w="100%"
        position="sticky"
        top="110px"
        bg="#fff"
        p="15px 0"
        zIndex="98"
      ></Box>
      {isLoading && <Text>Loading...</Text>}
      <Box w="900px" m="0 auto">
        {position?.pages.map((page) => {
          return <CommunityComponent key={page.page} data={page.results} />;
        })}
      </Box>

      {!hasNextPage && <Text>최하단입니다!</Text>}
      <Flex
        position="fixed"
        bottom={{ base: "90px", sm: "130px" }}
        right={{ base: "16px", sm: "60px" }}
        onClick={() => navigete(ROUTES.COMMUNITY.CREATE)}
        cursor="pointer"
        w="60px"
        h="60px"
        bg="#fff"
        borderRadius="100%"
        alignItems="center"
        justifyContent="center"
      >
        <FormOutlined style={{ fontSize: 20 }} />
      </Flex>
      <Box
        position="fixed"
        bottom={{ base: "90px", sm: "40px" }}
        right={{ base: "16px", sm: "50px" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        cursor="pointer"
      >
        <ScrollUp />
      </Box>
    </Box>
  );
};

export default CommunityContainer;
