import { Box } from "@chakra-ui/react";
import { useGetListQuery } from "apis/webcrawling/query";
import ScrollUp from "components/common/@Icons/System/ScrollUp";
import PositionComponent from "components/Position";
import { useEffect } from "react";

const PositionContainer = () => {
  const { data: position, fetchNextPage } = useGetListQuery({
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
    if (scrollTop + clientHeight >= scrollHeight) return fetchNextPage();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Box p="50px 10px">
      {position?.pages.map((page) => {
        return <PositionComponent key={page.page} data={page.results} />;
      })}

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
