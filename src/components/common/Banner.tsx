// Fleximport Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Flex } from "@chakra-ui/react";
const Banner = () => {
  return (
    <Flex p="0 30px">
      {[1, 2].map((el) => (
        <Flex key={el} justifyContent="center" alignItems="center">
          <img
            src={
              process.env.PUBLIC_URL + `/assets/image/banner/banner-${el}.png`
            }
            alt={`배너이미지-${el}}`}
          />
        </Flex>
      ))}
    </Flex>
  );
};
export default Banner;
