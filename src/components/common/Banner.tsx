// Fleximport Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Flex } from "@chakra-ui/react";
const Banner = () => {
  return (
    <Flex p="0 30px" m="0 auto">
      <Flex
        justifyContent="center"
        alignItems="center"
        borderRadius="50px"
        w="100%"
      >
        <img
          src={
            process.env.PUBLIC_URL + `/assets/image/banner/banner-main-1.png`
          }
          alt={`배너이미지}`}
          style={{
            width: "100%",
            borderRadius: "20px",
          }}
        />
      </Flex>
      {/* {[1, 2].map((el) => (
        <Flex key={el} justifyContent="center" alignItems="center">
          <img
            src={
              process.env.PUBLIC_URL + `/assets/image/banner/banner-${el}.png`
            }
            alt={`배너이미지-${el}}`}
          />
        </Flex>
      ))} */}
    </Flex>
  );
};
export default Banner;
