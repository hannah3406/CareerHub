import { PlusOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { Input, InputRef, Tag } from "antd";
import { Box } from "@chakra-ui/react";

interface IWriteTagProps {
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  setIsEnter: React.Dispatch<React.SetStateAction<boolean>>;
  tags: string[];
}

const WriteTag = ({ setTags, tags, setIsEnter }: IWriteTagProps) => {
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [alertMsg, setAlertMsg] = useState<string | undefined>(undefined);
  const inputRef = useRef<InputRef>(null);
  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsEnter(false);
  };
  const handleInputConfirm = () => {
    if (inputValue.length === 0) {
      setAlertMsg("1글자 이상의 태그를 입력해주세요.");
      return setInputValue("");
    }
    if (inputValue && tags.indexOf(inputValue) !== -1) {
      setAlertMsg("태그를 중복하여 추가할 수 없습니다.");
      return setInputValue("");
    }
    setAlertMsg(undefined);
    if (tags.length > 6) {
      const changeValue = [...tags];
      changeValue[6] = inputValue;
      setTags(changeValue);
    } else {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  return (
    <>
      {alertMsg && (
        <Box
          color="#D89999"
          position="absolute"
          top="-27px"
          left="118px"
          fontWeight="bold"
          fontSize="12px"
        >
          {alertMsg}
        </Box>
      )}
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{ width: 78, marginRight: 10 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag
          onClick={() => {
            setInputVisible((prev) => !prev);
          }}
        >
          <PlusOutlined />
        </Tag>
      )}
      <div style={{ marginBottom: 16, display: "inline-block" }}>
        {tags.map((tag) => (
          <span key={tag} style={{ display: "inline-block" }}>
            <SkillStyle
              closable
              onClose={(e) => {
                e.preventDefault();
                handleClose(tag);
              }}
            >
              {tag}
            </SkillStyle>
          </span>
        ))}
      </div>
    </>
  );
};
export default WriteTag;
const SkillStyle = styled(Tag)`
  font-size: 12px;
  color: #000;
  margin: 0px 5px 10px 0;
  text-align: center;
  padding: 3px 10px;
  border-radius: 10px;
  font-weight: 600;
  background-color: #ffe6e6;
  // background: #ffe6e6;
  border: 1px solid #d89999;
  // border-color: #ffe6e6;
`;
