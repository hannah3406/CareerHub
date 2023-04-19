import { Flex } from "@chakra-ui/react";

import { PositionList } from "apis/webcrawling/type";

import PositionItem from "./_fragments/PositionItem";
interface IPositionInfinityScrollProps {
  data?: PositionList[];
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const PositionPagination = (props: IPositionInfinityScrollProps) => {
  const { data, setShow } = props;

  return (
    <Flex flexDirection="column">
      {data &&
        data.map((data, idx) => (
          <PositionItem data={data} key={idx} setShow={setShow} />
        ))}
    </Flex>
  );
};

export default PositionPagination;
