import { Flex } from "@chakra-ui/react";
import { CommunityList } from "apis/community/type";
import CommunityItem from "./_fragments/CommunityItem";

interface ICommunityComponentProps {
  data: CommunityList[];
}

const CommunityComponent = (props: ICommunityComponentProps) => {
  const { data } = props;

  return (
    <Flex flexDirection="column" w="100%">
      {data.map((el, idx) => (
        <CommunityItem key={idx} data={el} />
      ))}
    </Flex>
  );
};

export default CommunityComponent;
