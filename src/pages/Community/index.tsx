import { Box } from "@chakra-ui/react";
import CommunityListContainer from "container/Community/list";

const CommunityPage = () => {
  return (
    <Box maxW="1200px" m="0 auto">
      <CommunityListContainer />
    </Box>
  );
};

export default CommunityPage;
