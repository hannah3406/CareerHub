import { Box, Flex, Skeleton } from '@chakra-ui/react';

const SkeletonArticle = (props: { type?: string }) => {
  const { type } = props;
  return (
    <Box>
      {Array(4)
        .fill(1)
        .map((_, index) => (
          <Flex
            p={{ base: '16px', sm: '25px' }}
            flexDir="column"
            borderBottom="1px solid"
            borderColor="gray.300"
            transition="transform .4s, box-shadow .4s"
            key={index}
          >
            {['80%'].map((i, idx) => (
              <Skeleton
                w={i}
                key={idx}
                mb={type !== 'policy' ? '10px' : '15px'}
                noOfLines={2}
                borderRadius="7px"
              >
                <div>{i}</div>
              </Skeleton>
            ))}
            {type !== 'policy' &&
              ['100%', '60%'].map((i, idx) => (
                <Skeleton
                  w={i}
                  h="17px"
                  key={idx}
                  mb={idx === 1 ? '15px' : '5px'}
                  noOfLines={2}
                  borderRadius="7px"
                >
                  <div>{i}</div>
                </Skeleton>
              ))}
            <Flex
              key={index}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              w="100%"
              mt={{ base: '6px', sm: 'auto' }}
              mb={{ base: '5px', sm: '0' }}
            >
              {['50px', '20px', '20px', '20px', '150px'].map((i, idx) => (
                <Skeleton
                  w={i}
                  h={'20px'}
                  key={idx}
                  mr="2px"
                  borderRadius="7px"
                >
                  <div>{i}</div>
                </Skeleton>
              ))}
            </Flex>
          </Flex>
        ))}
    </Box>
  );
};
export default SkeletonArticle;
