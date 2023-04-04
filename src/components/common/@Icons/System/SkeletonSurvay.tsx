import { Box, Divider, Flex, Skeleton } from '@chakra-ui/react';

const SkeletonSurvay = () => {
  return (
    <Box
      display="inline-block"
      w="49%"
      h="100%"
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
      <Flex p="15px" borderBottom="1px solid #F2F3F4" alignItems="center">
        <Skeleton fontSize="1xl" color="#000" mr="15px">
          <div>아이콘</div>
        </Skeleton>
        <Skeleton fontSize="14px" color="#000">
          <div>설문설문설문설문설문설문설문설문</div>
        </Skeleton>
      </Flex>
      <Box
        p="8px 16px 26px 16px"
        bg="white"
        boxShadow="inset 0px 7px 7px -3px rgba(50, 50, 50, 0.08)"
        borderTop="1px solid #f2f3f4"
        borderBottom="1px solid #f2f3f4"
      >
        <Box display="inline-block" w="100%" m="5px auto" as="label">
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
      {Array(2)
        .fill(1)
        .map((_, index) => (
          <Skeleton key={index} m="10px 16px" noOfLines={2} borderRadius="7px">
            <div>{index}</div>
          </Skeleton>
        ))}
      <Divider borderColor="#E5E7EC" />
    </Box>
  );
};
export default SkeletonSurvay;
