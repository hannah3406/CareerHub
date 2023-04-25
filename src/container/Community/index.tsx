import { Box, Flex, Text } from "@chakra-ui/react";
import ScrollUp from "components/common/@Icons/System/ScrollUp";
import { useGetCommunityListQuery } from "apis/community/query";
import CommunityComponent from "components/Community/list";
import { FormOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { useRecoilState } from "recoil";
import { CommunityParam, communityParamsState } from "recoil/community";
import SearchBar from "components/common/SearchBar";
import { communityFilter } from "./data";
import { useEffect, useState } from "react";
import { Pagination, PaginationProps } from "antd";
import styled from "@emotion/styled";

const CommunityContainer = () => {
  const location = useLocation();
  const [communityParams, setCommunityParams] =
    useRecoilState<CommunityParam>(communityParamsState);
  const [current, setCurrent] = useState<number>(communityParams.page ?? 1);

  const navigate = useNavigate();

  const { data: community, isLoading } = useGetCommunityListQuery({
    variables: communityParams,
    options: {
      enabled: true,
    },
  });
  const onPageChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
    setCommunityParams((prev) => ({ ...prev, page }));
  };
  useEffect(() => {
    if (location.search === undefined || location.search === "") {
      setCommunityParams({ keyword: undefined, type: undefined, page: 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <Box>
      <Box
        w="100%"
        position="sticky"
        top="110px"
        bg="#fff"
        p="10px 0"
        zIndex="98"
      >
        <SearchBar
          type="community"
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
      <Box w="900px" m="0 auto" mb="50px" textAlign="center">
        {community && (
          <PaginationStyle
            current={current}
            onChange={onPageChange}
            total={community.total}
          />
        )}
      </Box>
      <Flex
        position="fixed"
        bottom={{ base: "90px", sm: "130px" }}
        right={{ base: "16px", sm: "60px" }}
        onClick={() => navigate(ROUTES.COMMUNITY_CREATE.path)}
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
const PaginationStyle = styled(Pagination)`
  display: inline-block;
  margin: 30px auto;
  .ant-pagination-options {
    display: none;
  }
  .ant-pagination-item-active {
    background: #d89999;
    > a {
      color: #fff !important;
    }
  }
`;
