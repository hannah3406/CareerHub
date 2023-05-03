import { Box, Flex } from "@chakra-ui/react";
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

  const goDetailPage = () => {
    if (titleText === "인기 게시글") {
      navigate(ROUTES.COMMUNITY_LIST.path);
    } else {
      navigate(ROUTES.POSITION.path);
    }
  };
  return (
    <Box w="48%" mr={isMargin ? "4%" : "0"}>
      <TitleStyles>{titleText}</TitleStyles>
      <Flex
        flexDir="column"
        w="100%"
        border="1px solid #eee"
        borderRadius="10px"
        boxShadow="md"
        p="20px"
      >
        {data &&
          data.map(({ title, commentCnt, updatedAt }, idx) => (
            <Flex
              justifyContent="space-between"
              alignItems="center"
              key={idx}
              p="3px 0"
            >
              <Box>
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
                {moment(updatedAt).fromNow()}
              </Box>
            </Flex>
          ))}
      </Flex>
      <Flex alignItems="center" justifyContent="right" m="6px 0">
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
