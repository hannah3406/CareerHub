import { Box, Text } from "@chakra-ui/react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useGetListQuery } from "apis/webcrawling/query";
import ScrollUp from "components/common/@Icons/System/ScrollUp";
import SearchBar from "components/common/SearchBar";
import PositionComponent from "components/Position";
import { useEffect, useState } from "react";
import { ROUTES } from "constants/routes";
import { SearchParam, searchParamsState } from "recoil/search";
import { useRecoilState } from "recoil";
import { positionFilter } from "components/Position/position.data";
import { RadioChangeEvent } from "antd";

const PositionContainer = () => {
  const location = useLocation();
  const navigete = useNavigate();
  const [searchParams, setSearchParams] =
    useRecoilState<SearchParam>(searchParamsState);
  const [selectType, setSelectType] = useState<string>("title");

  const {
    data: position,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useGetListQuery({
    variables: searchParams,
    options: {
      enabled: true,
      getNextPageParam: (lastPage) => {
        if (lastPage.results.length < 10) return;
        return lastPage.page + 1;
      },
    },
  });
  const onChange = (e: RadioChangeEvent) => {
    setSelectType(e.target.value);
  };
  const onSearch = (keyword: string) => {
    const params = {
      keyword,
      type: selectType,
    };
    setSearchParams(params);
    navigete({
      pathname: ROUTES.POSITION,
      search: `?${createSearchParams(params)}`,
    });
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (hasNextPage && scrollTop + clientHeight >= scrollHeight)
      return fetchNextPage();
  };
  useEffect(() => {
    if (location.search === undefined || location.search === "") {
      setSearchParams({ keyword: undefined, type: undefined });
    }
  }, [location.search, setSearchParams]);

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
      >
        <SearchBar
          style={{ width: 900, margin: "0 auto" }}
          onSearch={onSearch}
          onChange={onChange}
          selectType={selectType}
          filter={positionFilter}
        />
      </Box>
      {isLoading && <Text>Loading...</Text>}
      <Box w="900px" m="0 auto">
        {position?.pages.map((page) => {
          return <PositionComponent key={page.page} data={page.results} />;
        })}
      </Box>

      {!hasNextPage && <Text>최하단입니다!</Text>}
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

export default PositionContainer;
