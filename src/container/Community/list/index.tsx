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
import RecommendBoardComponent from "components/RecommendBoard";
import { useGetRecommendQuery } from "apis/recommend/query";

const CommunityListContainer = () => {
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
  const { data: recommend } = useGetRecommendQuery({
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
      <Box w="1200px" m="30px auto 10px">
        <Text
          pt="10px"
          fontSize="20px"
          color="#555"
          textAlign="center"
          fontWeight="bold"
        >
          인기 게시글
          <img
            style={{
              display: "inline-block",
              margin: "3px 0 0 3px",
              height: "20px",
              verticalAlign: "top",
            }}
            src={process.env.PUBLIC_URL + `/assets/icon/community/flame.png`}
            alt="불꽃아이콘"
          />
        </Text>
        {recommend && <RecommendBoardComponent data={recommend} />}
      </Box>
      <Box
        w="100%"
        position="sticky"
        top="125px"
        bg="#fff"
        p="10px 0"
        zIndex="98"
      >
        <SearchBar
          type="community"
          style={{ width: 1000, margin: "0 auto" }}
          filter={communityFilter}
        />
      </Box>
      {isLoading && <Text>Loading...</Text>}
      <Box w="1000px" m="0 auto">
        {community && community.results && (
          <CommunityComponent data={community.results} />
        )}
      </Box>
      <Box w="1000px" m="0 auto" mb="50px" textAlign="center">
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

export default CommunityListContainer;
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
