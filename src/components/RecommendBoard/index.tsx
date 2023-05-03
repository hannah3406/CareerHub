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
    // nextArrow: (
    //   <Button className="next">
    //     <ArrowRightIcon color="#D89999" fontSize="23px" />
    //   </Button>
    // ),
    // prevArrow: (
    //   <Button className="prev">
    //     <ArrowLeftIcon color="#D89999" fontSize="23px" />
    //   </Button>
    // ),
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
    background: #eee;
    margin: 0 -5px;
    height: 335px;
    padding: -10px -5px;
    // box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
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
    bottom: 10px;
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
    opacity: 1;
  }
`;
// const Button = styled.div`
//   width: 40px;
//   height: 40px;
//   // border-radius: 50%;
//   box-shadow: 2.194px 2.046px 7.6px 0.4px rgba(0, 0, 0, 0.1);
//   position: absolute;
//   z-index: 3;
//   display: flex !important;
//   justify-content: center !important;
//   align-items: center !important;
//   &:hover {
//     background: #d89999;
//   }
//   &.slick-next {
//     right: -50px;
//   }
//   &.slick-prev {
//     left: -50px;
//   }
// `;
