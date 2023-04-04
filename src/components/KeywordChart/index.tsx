import { Box, Flex } from "@chakra-ui/react";
import { DummyList, GraphTypes } from "container/Statistics/types";
import { useEffect, useState } from "react";
import ChartComponent from "./_fragments/ChartComponent";
import WordCloudComponent from "./_fragments/WordCloudComponent";
interface IKeywordChartProps {
  dummy: DummyList;
  graphTypes: GraphTypes;
}

export const KeywordChart = (props: IKeywordChartProps) => {
  const { graphTypes, dummy } = props;
  const [labels, setLabels] = useState<string[]>([]);
  const [values, setValues] = useState<number[]>([]);

  const [chartType, setChartType] = useState<string>(graphTypes[0].type);
  useEffect(() => {
    setLabels(dummy.map((el) => el.label));
    setValues(dummy.map((el) => el.value));
  }, [dummy, graphTypes]);

  return (
    <Box w="65%" mr="5%">
      <Flex textAlign="center">
        {graphTypes.map((i) => (
          <Box
            key={i.name}
            onClick={() => setChartType(i.type)}
            w="20%"
            p="10px 0"
            border="1px solid #ddd"
            cursor="pointer"
            fontWeight="bold"
            bg={chartType === i.type ? "primary.500" : "#fff"}
            color={chartType === i.type ? "#fff" : "#000"}
            _hover={{
              bg: "primary.500",
              color: "white",
              boxShadow: "md",
            }}
          >
            {i.name}
          </Box>
        ))}
      </Flex>

      {chartType !== "wordcloud" ? (
        <ChartComponent
          dummy={dummy}
          chartType={chartType}
          labels={labels}
          values={values}
        />
      ) : (
        <WordCloudComponent dummy={dummy} />
      )}
    </Box>
  );
};
export default KeywordChart;
