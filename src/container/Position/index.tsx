import { Box, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useGetInfinityScrollListQuery } from "apis/webcrawling/query";
import ScrollUp from "components/Common/@Icons/System/ScrollUp";
import SearchBar from "components/Common/SearchBar";
import PositionInfinityScroll from "components/Position/InfinityScroll";
import { useEffect } from "react";
import { SearchParam, searchParamsState } from "recoil/search";
import { useRecoilState } from "recoil";
import { positionFilter } from "container/Position/data";

const PositionContainer = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] =
    useRecoilState<SearchParam>(searchParamsState);
  const {
    data: position,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useGetInfinityScrollListQuery({
    variables: searchParams,
    options: {
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
    if (location.search === undefined) {
      console.log("??", location.search, "??");

      setSearchParams({ keyword: undefined, type: undefined });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

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
          filter={positionFilter}
          type="position"
        />
      </Box>
      {isLoading && <Text>Loading...</Text>}
      <Box w="900px" m="0 auto">
        {position?.pages.map((page) => {
          return <PositionInfinityScroll key={page.page} data={page.results} />;
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
