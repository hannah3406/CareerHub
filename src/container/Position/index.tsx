import { Box, Text } from "@chakra-ui/react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useGetListQuery } from "apis/webcrawling/query";
import ScrollUp from "components/common/@Icons/System/ScrollUp";
import SearchBar from "components/common/SearchBar";
import PositionComponent from "components/Position";
import { useEffect, useState } from "react";
import { ROUTES } from "constants/routes";
import { searchState } from "recoil/search";
import { useRecoilState } from "recoil";

const PositionContainer = () => {
  const [init, setInit] = useState(false);
  const navigete = useNavigate();
  const [searchKeyword, setSearchKeyword] = useRecoilState<string | undefined>(
    searchState
  );
  const {
    data: position,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useGetListQuery(searchKeyword, {
    options: {
      enabled: true,
      getNextPageParam: (lastPage) => {
        if (lastPage.results.length < 10) return;
        return lastPage.page + 1;
      },
    },
  });
  const onSearch = (keyword: string) => {
    const params = { keyword };
    setSearchKeyword(keyword);
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
    console.log(init || !!searchKeyword);
  }, [init, searchKeyword]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Box p="50px 10px" w="900px" m="0 auto">
      <SearchBar onSearch={onSearch} />
      {isLoading && <Text>Loading...</Text>}
      {position?.pages.map((page) => {
        return <PositionComponent key={page.page} data={page.results} />;
      })}
      {/* {!hasNextPage && <Text>최하단입니다!</Text>} */}
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
