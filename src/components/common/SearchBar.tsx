import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Input, RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { ROUTES } from "constants/routes";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { CommunityParam, communityParamsState } from "recoil/community";
import { SearchParam, searchParamsState } from "recoil/search";

const { Search } = Input;

interface ISearchBarProps {
  filter: {
    name: string;
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
  const navigete = useNavigate();
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
    if (type === "position") {
      setSearchParams(params);
      return navigete({
        pathname: ROUTES.POSITION,
        search: `?${createSearchParams({
          keyword: params.keyword,
          type: params.type,
        })}`,
      });
    }
    if (type === "community") {
      setCommunityParams(params);
      return navigete({
        pathname: ROUTES.COMMUNITY.LIST,
        search: `?${createSearchParams({
          keyword: params.keyword,
          type: params.type,
        })}`,
      });
    }
  };
  const onChange = (e: RadioChangeEvent) => {
    setSelectType(e.target.value);
  };

  const RadioComponent = () => (
    <SearchRadioStyle
      defaultValue={filter[0].value}
      onChange={(e) => onChange(e)}
      buttonStyle="solid"
      value={selectType}
    >
      {filter.map((el, idx) => (
        <Radio.Button value={el.value} key={idx}>
          {el.name}
        </Radio.Button>
      ))}
    </SearchRadioStyle>
  );
  return (
    <div style={{ ...style }}>
      <Flex
        border={bgNone ? "none" : "1px solid #ddd"}
        bg={bgNone ? "transparent" : "#eee"}
        justifyContent="space-between"
        alignItems="center"
        p="10px 20px"
        borderRadius="10px"
      >
        <RadioComponent />

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
  width: 430px;
  .ant-input {
    width: 85%;
    margin-right: 10px;
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

const SearchRadioStyle = styled(Radio.Group)`
  border-radius: 10px;
  .ant-radio-button-wrapper {
    height: auto;
    padding: 5px;
    font-weight: bold;
    > span {
      padding: 10px;
    }
  }
`;
