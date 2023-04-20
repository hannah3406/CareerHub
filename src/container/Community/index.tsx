import { Box, Flex, Text } from "@chakra-ui/react";
import ScrollUp from "components/common/@Icons/System/ScrollUp";
import { useGetCommunityListQuery } from "apis/\bcommunity/query";
import CommunityComponent from "components/Community/list";
import { FormOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { useRecoilValue } from "recoil";
import { CommunityParam, communityParamsState } from "recoil/community";
import SearchBar from "components/common/SearchBar";
import { communityFilter } from "./data";

const CommunityContainer = () => {
  const communityParams = useRecoilValue<CommunityParam>(communityParamsState);
  const navigete = useNavigate();

  const { data: community, isLoading } = useGetCommunityListQuery({
    variables: communityParams,
    options: {
      enabled: true,
    },
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
      >
        <SearchBar
          type="community"
          bgNone
          style={{ width: 900, margin: "0 auto" }}
          filter={communityFilter}
        />
      </Box>
      {isLoading && <Text>Loading...</Text>}
      <Box w="900px" m="0 auto">
        {community && community.results && (
          <CommunityComponent data={community.results} />
        )}
      </Box>

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
        border="1px solid #eee"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
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
