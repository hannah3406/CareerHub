import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import ROUTES from "constants/routes";
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "./@Icons/System/ArrowRight";

interface IShotCutDefaultProps {
  onGoDetail: (path: string) => void;
  path: string;
  title: string;
  subText: string;
  src: string;
}
const ShotCut = () => {
  const navigate = useNavigate();
  const onGoDetail = (path: string) => {
    navigate(path);
  };
  return (
    <Flex
      display={{ base: "flex", sm: "none" }}
      direction="column"
      justifyContent="space-between"
      bg="gray.50"
      h="100%"
      p="15px 15px 0 15px"
    >
      <Grid gridTemplateColumns="repeat(1, 1fr)" placeItems="center">
        <ShotCutDefault
          path={ROUTES.HOME.path}
          onGoDetail={onGoDetail}
          src="assets/icon/CommunityIcon.svg"
          title={"커뮤니티"}
          subText={"대표 채용 사이트에 올라 온 실시간 채용공고를 확인해보세요."}
        />
        <ShotCutDefault
          path={ROUTES.COMMUNITY_LIST.path}
          onGoDetail={onGoDetail}
          title={"채용 공고"}
          src="assets/icon/PositionIcon.svg"
          subText={"채용과 관련된 자유로운 의견을 나누는 공간이에요"}
        />
        <ShotCutDefault
          path={ROUTES.STATISTICSPAGE.path}
          onGoDetail={onGoDetail}
          title={"통계분석"}
          src="assets/icon/Statistics.svg"
          subText={"다양한 형태의 통계 결과를 확인하세요"}
        />
      </Grid>
      <Flex bottom="0" w="100%" h="120px" borderTop="1px solid #E5E7EC"></Flex>
    </Flex>
  );
};
export default ShotCut;

const ShotCutDefault = ({
  onGoDetail,
  path,
  title,
  subText,
  src,
}: IShotCutDefaultProps) => {
  return (
    <Box height="100%" onClick={() => onGoDetail(path)} w="100%" mb="10px">
      <Flex
        w="100%"
        alignItems="center"
        p="15px"
        border="1px solid #F2F3F4"
        borderRadius="14px"
        bg="white"
      >
        <img
          src={src}
          alt={title}
          style={{ width: 40, display: "inline-block" }}
        />
        <Box ml="5">
          <Text
            fontSize="16px"
            fontWeight="700"
            color="gray.800"
            lineHeight="28px"
          >
            {title}
          </Text>
          <Text fontSize="12px" color="gray.600" lineHeight="18px">
            {subText}
          </Text>
        </Box>
        <ArrowRightIcon w="24px" h="24px" ml="auto" />
      </Flex>
    </Box>
  );
};
