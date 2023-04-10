import { Box } from "@chakra-ui/react";
import { useGetListQuery } from "apis/webcrawling/query";
import ScrollUp from "components/common/@Icons/System/ScrollUp";
import PositionComponent from "components/Position";
import { useEffect, useState } from "react";

const PositionContainer = () => {
  // const [page, setPage] = useState(1);
  const page = 1;
  const { data } = useGetListQuery(page, {
    options: {
      staleTime: 10 * 1000,
    },
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Box p="50px 10px">
      <PositionComponent data={data} />
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
