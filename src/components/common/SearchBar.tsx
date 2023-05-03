import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Input, Select } from "antd";
import { ROUTES } from "constants/routes";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { CommunityParam, communityParamsState } from "recoil/community";
import { SearchParam, searchParamsState } from "recoil/search";

const { Search } = Input;

interface ISearchBarProps {
  filter: {
    label: string;
    value: string;
  }[];
  style: {
    [key: string]: string | number;
  };
  bgNone?: boolean;
  type: string;
  current?: number;
}
export type PageParam = {
  keyword: string;
  type: string;
  page?: number;
};
const SearchBar = ({
  filter,
  style,
  bgNone,
  type,
  current,
}: ISearchBarProps) => {
  const navigate = useNavigate();
  const setSearchParams = useSetRecoilState<SearchParam>(searchParamsState);
  const setCommunityParams =
    useSetRecoilState<CommunityParam>(communityParamsState);
  const [selectType, setSelectType] = useState<string>(filter[0].value);
  const onSearch = (keyword: string) => {
    const params: PageParam = {
      keyword,
      type: selectType,
    };
    if (current) params.page = current;
    if (type === "positionModal") {
      return setSearchParams(params);
    }
    if (type === "position") {
      setSearchParams(params);
      return navigate({
        pathname: ROUTES.POSITION.path,
        search: `?${createSearchParams({
          keyword: params.keyword,
          type: params.type,
        })}`,
      });
    }

    if (type === "community") {
      setCommunityParams(params);
      return navigate({
        pathname: ROUTES.COMMUNITY_LIST.path,
        search: `?${createSearchParams({
          keyword: params.keyword,
          type: params.type,
        })}`,
      });
    }
  };

  const selectChange = (value: string) => {
    setSelectType(value);
  };

  return (
    <div style={{ ...style }}>
      <Flex
        border={bgNone ? "none" : "1px solid #ddd"}
        bg={bgNone ? "transparent" : "#eee"}
        justifyContent="flex-end"
        alignItems="center"
        p="10px 20px"
        borderRadius="10px"
      >
        <SearchSelectStyle>
          <Select
            defaultValue={filter[0].value}
            style={{ width: 120 }}
            onChange={selectChange}
            options={filter}
          />
        </SearchSelectStyle>

        <Box>
          <SearchStyle
            placeholder="검색어를 입력해주세요"
            onSearch={onSearch}
            enterButton
          />
        </Box>
      </Flex>
    </div>
  );
};
export default SearchBar;

const SearchStyle = styled(Search)`
  .ant-input {
    width: 460px;
    margin: 0 10px;
    color: #333;
    display: inline-block;
    padding: 10px 20px !important;
    border: 1px solid #ddd;
    // border-radius: 20px 0px 0px 20px !important;
    border-radius: 20px !important;
    &::placeholder {
      color: #333;
    }
  }
  .ant-input-group-addon {
    height: 100%;
    width: 50px;
    display: inline-block;
    vertical-align: top;
    border-radius: 20px !important;
    // border-radius: 0px 20px 20px 0px !important;
  }
  .ant-input-group-addon > button {
    height: 100%;
    width: 50px;
    // border: 1px solid #eee;
    padding: 10px !important;
    border-radius: 20px !important;
    // border-radius: 0px 20px 20px 0px !important;
  }
  // .anticon.anticon-search {
  //   color: #fff !important;
  // }
`;

const SearchSelectStyle = styled.div`
  .ant-select {
    width: 100px !important;
    text-align: center;
  }
  .ant-select-selector {
    border-radius: 20px;
    height: 44px !important;
  }
  input {
    height: 100% !important;
  }
  .ant-select-selection-item {
    top: 6px;
  }
`;
