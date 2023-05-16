import { Flex } from "@chakra-ui/react";

const NoResult = () => {
  return (
    <Flex w="900px" m="0 auto">
      <img
        style={{ display: "inline-block", margin: "0 auto" }}
        src={process.env.PUBLIC_URL + `/assets/image/no_result_img.png`}
        alt="no_result_img"
      />
    </Flex>
  );
};
export default NoResult;
