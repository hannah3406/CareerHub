import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommunityItem from "components/Community/list/_fragments/CommunityItem";
import { CommunityList } from "apis/community/type";
import styled from "@emotion/styled";

import ArrowRightIcon from "components/Common/@Icons/System/ArrowRight";
import ArrowLeftIcon from "components/Common/@Icons/System/ArrowLeft";

interface IRecommendBoardComponentProps {
  data: CommunityList[];
}

const RecommendBoardComponent = (props: IRecommendBoardComponentProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    nextArrow: (
      <Button className="next">
        <ArrowRightIcon color="#fff" fontSize="18px" />
      </Button>
    ),
    prevArrow: (
      <Button className="prev">
        <ArrowLeftIcon color="#fff" fontSize="18px" />
      </Button>
    ),
  };
  const { data } = props;
  return (
    <SliderWrapper>
      <Slider {...settings}>
        {data.map((el, idx) => (
          <CommunityItem key={idx} data={el} sliderMode />
        ))}
      </Slider>
    </SliderWrapper>
  );
};
export default RecommendBoardComponent;

const SliderWrapper = styled.div`
  position: relative;
  width: 900px;
  margin: 0 auto;
  .slick-list {
    margin: 0 -5px;
    height: 300px;
  }
  .slick-slide > div {
    padding: 0 5px;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;
const Button = styled.div`
  width: 30px;
  height: 30px;
  background: #d89999;
  border-radius: 50%;
  position: absolute;
  z-index: 3;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  &:hover {
    background: #d89999;
  }
  &.slick-next {
    right: -40px;
  }
  &.slick-prev {
    left: -40px;
  }
`;
