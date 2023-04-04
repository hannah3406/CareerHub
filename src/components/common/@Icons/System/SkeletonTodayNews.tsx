import { Box, Flex, Skeleton } from '@chakra-ui/react';

const SkeletonTodayNews = (props: { rightType: boolean }) => {
  const { rightType } = props;
  return (
    <Box>
      {rightType &&
        Array(6)
          .fill(1)
          .map((el, index) => (
            <Flex
              p={{ base: '16px', sm: '25px' }}
              flexDir="column"
              borderBottom="1px solid"
              borderColor="gray.300"
              transition="transform .4s, box-shadow .4s"
              key={index}
            >
              {['100%', '75%', '20%'].map((i, idx) => (
                <Skeleton
                  w={i}
                  h="17px"
                  key={idx}
                  mb={idx === 1 ? '15px' : '10px'}
                  noOfLines={2}
                  borderRadius="10px"
                >
                  <div>{i}</div>
                </Skeleton>
              ))}
            </Flex>
          ))}
      {!rightType && (
        <>
          <Flex direction="column">
            <Skeleton borderRadius="5px" objectFit="cover" h="300px" w="100%">
              <div>img</div>
            </Skeleton>
            {Array(5)
              .fill(1)
              .map((el, index) => (
                <Flex
                  w="100%"
                  h="18px"
                  key={index}
                  justifyContent="space-between"
                  mt="15px"
                >
                  <Skeleton w="430px" noOfLines={2} borderRadius="5px">
                    <div>{el}</div>
                  </Skeleton>
                  <Flex alignItems="flex-end">
                    <Skeleton w="70px" h="18px" borderRadius="5px">
                      <div>{el}</div>
                    </Skeleton>
                    {/* <Skeleton w="18px" h="18px" borderRadius="5px">
                      <div>{el}</div>
                    </Skeleton> */}
                  </Flex>
                </Flex>
              ))}
            <Skeleton w="130px" h="18px" borderRadius="5px" mt="20px">
              <div>btn</div>
            </Skeleton>
          </Flex>
        </>
      )}
    </Box>
  );
};
export default SkeletonTodayNews;
