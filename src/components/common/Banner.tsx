import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

import { Flex } from "@chakra-ui/react";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
  };
  return (
    <SliderWrapper>
      <Slider {...settings}>
        {[1, 2, 3].map((el) => (
          <Flex
            key={el}
            justifyContent="center"
            alignItems="center"
            m="0 auto"
            boxShadow="md"
          >
            <img
              src={
                process.env.PUBLIC_URL +
                `/assets/image/banner/main-banner${el}.png`
              }
              alt={`배너이미지}`}
              style={{
                width: "100%",
              }}
            />
          </Flex>
        ))}
      </Slider>
    </SliderWrapper>
  );
};
export default Banner;
const SliderWrapper = styled.div`
  position: relative;
  width: 1000px;
  margin: 0 auto;
  .slick-list {
    width: 100%;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-dots {
    bottom: -15px;
  }
  .slick-dots li {
    margin: 0;
  }
  .slick-dots li button {
    padding: 0;
    &:before {
      color: #d89999;
      opacity: 0.5;
    }
  }
  .slick-dots li.slick-active button:before {
    color: #333;
    opacity: 0.7;
  }
`;
