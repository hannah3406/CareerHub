import { Flex } from "@chakra-ui/react";
import { useGetRecommendQuery } from "apis/recommend/query";
import { useGetPaginationListQuery } from "apis/webcrawling/query";
import SummaryCardsComponent from "components/Common/SummaryCards";
import { useEffect, useMemo, useState } from "react";
export interface SummaryCard {
  title: string;
  commentCnt?: number;
  updatedAt: string;
}
const MainContainer = () => {
  const [recommendList, setRecommendList] = useState<SummaryCard[]>([]);
  const [positionList, setPositionList] = useState<SummaryCard[]>([]);
  const { data: recommend } = useGetRecommendQuery({
    options: {
      enabled: true,
    },
  });
  const { data: position } = useGetPaginationListQuery({
    variables: { keyword: undefined },
    options: {
      enabled: true,
    },
  });

  const _recommendList = useMemo(() => {
    if (recommend) {
      return recommend.slice(0, 5).map(({ title, commentCnt, updatedAt }) => ({
        title,
        commentCnt,
        updatedAt,
      }));
    }
    return [];
  }, [recommend]);
  const _positionList = useMemo(() => {
    if (position) {
      return position.results.slice(0, 5).map(({ title, updatedAt }) => ({
        title,
        updatedAt,
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
      <Flex flexWrap="wrap" w="1200px" m="40px auto" p="0 30px">
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
