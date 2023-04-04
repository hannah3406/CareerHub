import { Flex } from "@chakra-ui/react";
import KeywordChart from "components/KeywordChart";
import KeywordFrequency from "components/KeywordFrequency";
import { dummy, graphTypes } from "./data";

const StatisticsContainer = () => {
  return (
    <Flex
      alignItems="start"
      justifyContent="space-between"
      p="50px 10px"
      boxShadow="inset 0 1px 10px rgba(0,0,0,0.08)"
    >
      <KeywordFrequency dummy={dummy} />
      <KeywordChart dummy={dummy} graphTypes={graphTypes} />
    </Flex>
  );
};

export default StatisticsContainer;
