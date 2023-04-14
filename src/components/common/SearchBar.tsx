import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Input, RadioChangeEvent } from "antd";
import { Radio } from "antd";

const { Search } = Input;

interface ISearchBarProps {
  onSearch: (value: string) => void;
  onChange: (e: RadioChangeEvent) => void;
  filter: {
    name: string;
    value: string;
  }[];
  style: {
    [key: string]: string | number;
  };
  selectType: string;
}

const SearchBar = ({
  onSearch,
  onChange,
  filter,
  style,
  selectType,
}: ISearchBarProps) => {
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
        border="1px solid #ddd"
        bg="#eee"
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
    border: 1px solid #eee;
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
