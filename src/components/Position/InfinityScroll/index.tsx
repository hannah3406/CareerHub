import { Flex } from "@chakra-ui/react";

import { PositionList } from "apis/webcrawling/type";

import PositionItem from "./_fragments/PositionItem";
interface IPositionInfinityScrollProps {
  data?: PositionList[];
}

const PositionInfinityScroll = (props: IPositionInfinityScrollProps) => {
  const { data } = props;

  return (
    <Flex flexDirection="column">
      {data && data.map((data, idx) => <PositionItem data={data} key={idx} />)}
    </Flex>
  );
};

export default PositionInfinityScroll;
