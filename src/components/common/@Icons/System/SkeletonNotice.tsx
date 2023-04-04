import { Box, Flex, Skeleton } from '@chakra-ui/react';

const SkeletonNotice = () => {
  return (
    <Box
      display="inline-block"
      w="100%"
      h="50%"
      border="1px solid #F2F3F4"
      borderRadius="14px"
      m="0 auto"
      bg="white"
      position="relative"
    >
      <Flex p="15px" borderBottom="1px solid #F2F3F4" alignItems="center">
        <Skeleton fontSize="1xl" color="#000" mr="15px">
          <div>아이콘</div>
        </Skeleton>
        <Skeleton fontSize="1xl" color="#000">
          <div>설문설문</div>
        </Skeleton>
      </Flex>

      <Box p="8px 16px 26px 16px" bg="white">
        <Box display="inline-block" w="95%" m="5px auto" as="label">
          <Box position="relative" mb="8px">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  mt="10px"
                  noOfLines={2}
                  fontSize="14px"
                  borderRadius="7px"
                >
                  <div>{index}</div>
                </Skeleton>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default SkeletonNotice;
