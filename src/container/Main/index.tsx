import { Box, Flex } from "@chakra-ui/react";
import { useGetRecommendQuery } from "apis/recommend/query";
import { useGetPaginationListQuery } from "apis/webcrawling/query";
import Banner from "components/common/Banner";

import SummaryCardsComponent from "components/common/SummaryCards";
import { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { searchPageParamsState, SearchParam } from "recoil/search";
export interface SummaryCard {
  title: string;
  commentCnt?: number;
  createdAt?: string;
  view?: number;
}
const MainContainer = () => {
  const [recommendList, setRecommendList] = useState<SummaryCard[] | null>(
    null
  );
  const [positionList, setPositionList] = useState<SummaryCard[] | null>(null);
  const searchParams = useRecoilValue<SearchParam>(searchPageParamsState);
  const { data: recommend } = useGetRecommendQuery({
    variables: { page: 1 },
  });
  const { data: position } = useGetPaginationListQuery({
    variables: searchParams,
  });

  const _recommendList = useMemo(() => {
    return recommend
      ? recommend.slice(0, 5).map(({ title, view, commentCnt, createdAt }) => ({
          title,
          commentCnt,
          createdAt,
          view,
        }))
      : [];
  }, [recommend]);

  const _positionList = useMemo(() => {
    return position
      ? position.results
          .slice(0, 5)
          .map(({ title, createdAt }) => ({ title, createdAt }))
      : [];
  }, [position]);

  useEffect(() => {
    setRecommendList(_recommendList);
  }, [_recommendList, recommend]);

  useEffect(() => {
    setPositionList(_positionList);
  }, [_positionList, position]);
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
