import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";
import { useGetRecommendQuery } from "apis/recommend/query";
import { useGetInfinityScrollListQuery } from "apis/webcrawling/query";
import ArrowRightIcon from "components/common/@Icons/System/ArrowRight";

import SummaryCardsComponent from "components/common/SummaryCards";
import ROUTES from "constants/routes";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { SearchParam, searchParamsState } from "recoil/search";
export interface SummaryCard {
  title: string;
  commentCnt?: number;
  updatedAt: string;
  view?: number;
}
const MainMobileContainer = () => {
  const [recommendList, setRecommendList] = useState<SummaryCard[]>([]);
  const [positionList, setPositionList] = useState<SummaryCard[]>([]);
  const searchParams = useRecoilValue<SearchParam>(searchParamsState);
  const { data: recommend } = useGetRecommendQuery({
    variables: { page: 1 },
    options: {
      enabled: true,
    },
  });
  const navigate = useNavigate();
  const { data: position } = useGetInfinityScrollListQuery({
    variables: searchParams,
    options: {
      getNextPageParam: (lastPage) => {
        if (lastPage.results.length < 10) return;
        return lastPage.page + 1;
      },
    },
  });

  const _recommendList = useMemo(() => {
    if (recommend) {
      return recommend
        .slice(0, 5)
        .map(({ title, view, commentCnt, updatedAt }) => ({
          title,
          commentCnt,
          updatedAt,
          view,
        }));
    }
    return [];
  }, [recommend]);
  const _positionList = useMemo(() => {
    if (position) {
      return position.pages[0].results
        .slice(0, 5)
        .map(({ title, updatedAt }) => ({
          title,
          updatedAt,
        }));
    }
    return [];
  }, [position]);
  const onGoDetail = (path: string) => {
    navigate(path);
  };
  useEffect(() => {
    setRecommendList(_recommendList);
  }, [_recommendList]);

  useEffect(() => {
    setPositionList(_positionList);
  }, [_positionList]);
  return (
    <Flex
      display={{ base: "flex", sm: "none" }}
      w="100%"
      flexDir="column"
      m="20px auto"
      p="0 30px"
    >
      <Flex
        display={{ base: "flex", sm: "none" }}
        direction="column"
        justifyContent="space-between"
        bg="gray.50"
        h="100%"
        p="15px 15px 0 15px"
      >
        <ShotCutDefault
          path={ROUTES.HOME.path}
          onGoDetail={onGoDetail}
          src="assets/icon/CommunityIcon.svg"
          title={"커뮤니티"}
          subText={"채용과 관련된 자유로운 의견을 나누는 공간이에요"}
          data={recommendList}
        />
        <ShotCutDefault
          path={ROUTES.COMMUNITY_LIST.path}
          onGoDetail={onGoDetail}
          title={"채용 공고"}
          src="assets/icon/PositionIcon.svg"
          data={positionList}
          subText={"대표 채용 사이트에 올라 온 실시간 채용공고를 확인해보세요."}
        />
        <Grid
          mt="10px"
          gridTemplateColumns="repeat(1, 1fr)"
          placeItems="center"
        >
          <Box
            height="100%"
            onClick={() => onGoDetail(ROUTES.STATISTICSPAGE.path)}
            w="100%"
            mb="10px"
          >
            <Flex
              w="100%"
              alignItems="center"
              p="15px"
              border="1px solid #F2F3F4"
              borderRadius="14px"
              bg="white"
            >
              <img
                src="assets/icon/Statistics.svg"
                alt="통계분석"
                style={{ width: 40, display: "inline-block" }}
              />
              <Box ml="5">
                <Text
                  fontSize="16px"
                  fontWeight="700"
                  color="gray.800"
                  lineHeight="28px"
                >
                  통계분석
                </Text>
                <Text fontSize="12px" color="gray.600" lineHeight="18px">
                  다양한 형태의 통계 결과를 확인하세요
                </Text>
              </Box>
              <ArrowRightIcon w="24px" h="24px" ml="auto" />
            </Flex>
          </Box>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default MainMobileContainer;
interface IShotCutDefaultProps {
  onGoDetail: (path: string) => void;
  path: string;
  title: string;
  subText: string;
  src: string;
  data?: SummaryCard[];
}
const ShotCutDefault = ({
  title,
  subText,
  src,
  data,
}: IShotCutDefaultProps) => {
  return (
    <Box height="100%" w="100%" mb="10px">
      <Accordion
        display="inline-block"
        w="100%"
        border="1px solid #F2F3F4"
        borderRadius="14px"
        m="0 auto"
        mb="10px"
        bg="white"
        mt="10px"
        position="relative"
        allowToggle
        alignSelf="center"
      >
        <AccordionItem border="none">
          <AccordionButton
            p="16px"
            justifyContent="space-between"
            _hover={{ background: "none" }}
            _focus={{ boxShadow: "none" }}
          >
            <Flex alignItems="center">
              <img
                src={src}
                alt={title}
                style={{ width: 40, display: "inline-block" }}
              />
              <Box textAlign="left" ml="5">
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
            </Flex>
            <ArrowRightIcon
              w="24px"
              h="24px"
              ml="auto"
              transform="rotate(90deg) translateX(3px)"
            />
          </AccordionButton>
          <AccordionPanel>
            <Accordion w="100%" allowToggle alignSelf="center">
              {data && (
                <SummaryCardsComponent
                  isMargin
                  data={data}
                  detailText={`${title} 보러가기`}
                  titleText="최신 공고"
                />
              )}
            </Accordion>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
