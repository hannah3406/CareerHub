import { Input } from "antd";

const { Search } = Input;

interface ISearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: ISearchBarProps) => {
  return (
    <Search
      placeholder="검색어를 입력해주세요"
      onSearch={onSearch}
      enterButton
    />
  );
};
export default SearchBar;
