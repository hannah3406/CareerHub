import { Flex } from "@chakra-ui/react";

import { PositionList } from "apis/webcrawling/type";

import PositionItem from "./_fragments/PositionItem";
interface IPositionComponentProps {
  data?: PositionList[];
}

const PositionComponent = (props: IPositionComponentProps) => {
  const { data } = props;

  return (
    <Flex flexDirection="column">
      {data && data.map((data, idx) => <PositionItem data={data} key={idx} />)}
    </Flex>
  );
};

export default PositionComponent;
