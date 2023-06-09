import { Box, Flex } from "@chakra-ui/react";
import { useGetRecommendQuery } from "apis/recommend/query";
import { useGetInfinityScrollListQuery } from "apis/webcrawling/query";
import Banner from "components/common/Banner";

import SummaryCardsComponent from "components/common/SummaryCards";
import { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { SearchParam, searchParamsState } from "recoil/search";
export interface SummaryCard {
  title: string;
  commentCnt?: number;
  createdAt?: string;
  view?: number;
}
const MainContainer = () => {
  const [recommendList, setRecommendList] = useState<SummaryCard[]>([]);
  const [positionList, setPositionList] = useState<SummaryCard[]>([]);
  const searchParams = useRecoilValue<SearchParam>(searchParamsState);
  const { data: recommend } = useGetRecommendQuery({
    variables: { page: 1 },
    options: {
      enabled: true,
    },
  });
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
        .map(({ title, view, commentCnt, createdAt }) => ({
          title,
          commentCnt,
          createdAt,
          view,
        }));
    }
    return [];
  }, [recommend]);
  const _positionList = useMemo(() => {
    if (position) {
      return position.pages[0].results
        .slice(0, 5)
        .map(({ title, createdAt }) => ({
          title,
          createdAt,
        }));
    }
    return [];
  }, [position]);

  useEffect(() => {
    setRecommendList(_recommendList);
  }, [_recommendList]);

  useEffect(() => {
    setPositionList(_positionList);
  }, [_positionList]);
  return (
    <>
      <Box maxW="1200px" m="20px auto">
        <Banner />
      </Box>
      <Flex
        display={{ base: "none", sm: "flex" }}
        w="1200px"
        m="40px auto"
        p="0 30px"
      >
        {positionList && (
          <SummaryCardsComponent
            isMargin
            data={positionList}
            detailText="채용 공고 보러가기"
            titleText="최신 공고"
          />
        )}
        {recommendList && (
          <SummaryCardsComponent
            data={recommendList}
            detailText="전체 게시글 보러가기"
            titleText="인기 게시글"
          />
        )}
      </Flex>
    </>
  );
};

export default MainContainer;
