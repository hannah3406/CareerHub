import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommunityItem from "components/Community/list/_fragments/CommunityItem";
import { CommunityList } from "apis/community/type";
import styled from "@emotion/styled";

interface IRecommendBoardComponentProps {
  data: CommunityList[];
}

const RecommendBoardComponent = (props: IRecommendBoardComponentProps) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToScroll: 2,
    slidesToShow: 2,
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
  width: 1000px;
  margin: 0 auto;
  .slick-list {
    width: 1000px;
    margin: 0 -5px;
    height: 320px;
    padding: -10px -5px;
  }
  .slick-slide > div {
    padding: 10px 5px;
    margin: 0 5px;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-dots {
    bottom: 15px;
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
