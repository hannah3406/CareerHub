import { Box, Skeleton, WrapItem } from '@chakra-ui/react';

const SkeletonEmotion = () => {
  return (
    <Box w="100%">
      {Array(6)
        .fill(1)
        .map((el, idx) => {
          return (
            <WrapItem
              key={idx}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              mb="10px"
            >
              <Skeleton w="65%" borderRadius="10px">
                <div>{el}</div>
              </Skeleton>
              {Array(2)
                .fill('10%')
                .map((i, idx) => (
                  <Skeleton w={i} key={idx} borderRadius="10px">
                    <div>{el}</div>
                  </Skeleton>
                ))}

              <Skeleton w="7%" borderRadius="10px">
                <div>{el}</div>
              </Skeleton>
            </WrapItem>
          );
        })}
    </Box>
  );
};
export default SkeletonEmotion;
