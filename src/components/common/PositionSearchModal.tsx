import styled from "@emotion/styled";
import SearchBar from "components/common/SearchBar";
import { positionFilter } from "container/Position/data";

import { Modal, Pagination, PaginationProps } from "antd";
import { Box, Flex } from "@chakra-ui/react";
import PositionPagination from "components/Position/Pagination";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { SearchParam, searchParamsState } from "recoil/search";
import { useGetPaginationListQuery } from "apis/webcrawling/query";

interface IWriteModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const PositionSearchModal = ({ show, setShow }: IWriteModalProps) => {
  const [searchParams, setSearchParams] =
    useRecoilState<SearchParam>(searchParamsState);

  const [current, setCurrent] = useState<number>(searchParams.page ?? 1);

  const { data: search } = useGetPaginationListQuery({
    variables: searchParams,
    options: {
      enabled: show,
    },
  });

  const onPageChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
    setSearchParams((prev) => ({ ...prev, page }));
  };
  return (
    <Modal
      open={show}
      title={<ModalHeaderStyle>공고검색</ModalHeaderStyle>}
      onCancel={() => setShow(false)}
      footer={<></>}
    >
      <ModalBodyStyle>
        <SearchBar
          style={{ margin: "0 auto" }}
          bgNone
          type="positionModal"
          filter={positionFilter}
          current={current}
        />

        <Flex flexDirection="column">
          <Flex flexDirection="column">
            <Flex
              justifyContent="flex-start"
              alignItems="top"
              mt="20px"
              p="10px 20px"
              bg="#eee"
              border="1px solid #eee"
            >
              <ModalTableHeaderStyle
                style={{
                  width: "20%",
                }}
              >
                기업명
              </ModalTableHeaderStyle>
              <ModalTableHeaderStyle
                style={{
                  width: "75%",
                }}
              >
                공고명
              </ModalTableHeaderStyle>
              <ModalTableHeaderStyle>일자</ModalTableHeaderStyle>
            </Flex>
            {!search && <Box>검색결과가 없습니다.</Box>}
            {search && (
              <PositionPagination data={search.results} setShow={setShow} />
            )}
          </Flex>
          {search && (
            <PaginationStyle
              current={current}
              onChange={onPageChange}
              total={search.total}
            />
          )}
        </Flex>
      </ModalBodyStyle>
    </Modal>
  );
};
export default PositionSearchModal;
const ModalHeaderStyle = styled.div`
  padding: 30px 30px 0 30px;
  font-weight: bold;
`;
const ModalBodyStyle = styled.div`
  padding: 15px;
`;
const ModalTableHeaderStyle = styled.div`
  text-align: center;
  font-weight: bold;
`;

const PaginationStyle = styled(Pagination)`
  display: inline-block;
  margin: 30px auto;
  .ant-pagination-options {
    display: none;
  }
  .ant-pagination-item-active {
    background: #d89999;
    > a {
      color: #fff !important;
    }
  }
`;
