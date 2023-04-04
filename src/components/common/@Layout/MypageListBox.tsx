import { Flex } from '@chakra-ui/react';

interface MypageListBoxType {
  component: JSX.Element;
}
const MypageListBox = ({ component }: MypageListBoxType) => {
  return (
    <Flex
      border="1px solid #E5E7EC"
      p={{ base: '20px', sm: '30px' }}
      borderRadius="10px"
      direction="column"
      boxShadow="0px 2px 8px 0px #0000000D"
      h="500px"
    >
      {component}
    </Flex>
  );
};

export default MypageListBox;
