import { Box, Flex, useBreakpoint } from "@chakra-ui/react";
import styled from "@emotion/styled";
import ROUTES from "constants/routes";
import { SummaryCard } from "container/Main";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import ArrowRight from "./@Icons/System/ArrowRight";
interface ISummaryCardsComponentProps {
  data?: SummaryCard[];
  detailText: string;
  titleText: string;
  isMargin?: boolean;
}
const SummaryCardsComponent = ({
  data,
  detailText,
  titleText,
  isMargin,
}: ISummaryCardsComponentProps) => {
  const navigate = useNavigate();
  const breakpoint = useBreakpoint();
  const goDetailPage = () => {
    if (titleText === "인기 게시글" || titleText === "커뮤니티") {
      console.log(titleText, "titleText");
      navigate(ROUTES.COMMUNITY_LIST.path);
    } else {
      navigate(ROUTES.POSITION.path);
    }
  };
  return (
    <Box
      w={{ base: "100%", sm: "48%" }}
      mr={{ base: "0", sm: isMargin ? "4%" : "0" }}
    >
      {breakpoint !== "base" && <TitleStyles>{titleText}</TitleStyles>}
      <Flex
        flexDir="column"
        w="100%"
        border={{ base: "none", sm: "1px solid #eee" }}
        borderRadius="10px"
        boxShadow={{ base: "none", sm: "md" }}
        p="20px"
      >
        {data &&
          data.map(({ title, commentCnt, createdAt }, idx) => (
            <Flex
              justifyContent="space-between"
              alignItems="center"
              key={idx}
              p="3px 0"
            >
              <Box w="90%" noOfLines={1}>
                {title}
                {commentCnt && (
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0 4px",
                      color: "#D89999",
                      fontFamily: "Arita-dotum-Medium",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    ({commentCnt})
                  </span>
                )}
              </Box>

              <Box fontSize="12px" fontFamily="Arita-dotum-Medium">
                {moment(createdAt).fromNow()}
              </Box>
            </Flex>
          ))}
      </Flex>
      <Flex
        display={{ base: "flex", sm: "none" }}
        alignItems="center"
        justifyContent="center"
        m="6px 0"
        border="1px solid #eee"
        p="10px 0"
        boxShadow="sm"
      >
        <GoDetailMobileStyles onClick={goDetailPage}>
          {detailText}
        </GoDetailMobileStyles>
      </Flex>
      <Flex
        display={{ base: "none", sm: "flex" }}
        alignItems="center"
        justifyContent="right"
        m="6px 0"
      >
        <GoDetailStyles onClick={goDetailPage}>{detailText}</GoDetailStyles>
        <ArrowRight color="#000" fontSize="14px" />
      </Flex>
    </Box>
  );
};
export default SummaryCardsComponent;
const TitleStyles = styled.div`
  font-weight: bold;
  margin: 6px 0;
`;
const GoDetailStyles = styled.div`
  color: #777;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  font-family: "Arita-dotum-Medium";
  &:hover {
    color: #000;
  }
`;
const GoDetailMobileStyles = styled.div`
  color: #777;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  font-family: "Arita-dotum-Medium";
  &:hover {
    color: #000;
  }
`;
