import { Button, Form, Input, Modal, RadioChangeEvent, Tag, theme } from "antd";
import { useEffect, useRef, useState } from "react";
import type { InputRef } from "antd";

import { PlusOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import SearchBar from "components/common/SearchBar";
import { positionFilter } from "components/Position/position.data";
import { useRecoilState } from "recoil";
import { SearchParam, searchParamsState } from "recoil/search";
import { useGetListQuery } from "apis/webcrawling/query";
import { Box } from "@chakra-ui/react";

const CommunityWriteComponent = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<InputRef>(null);
  const [selectType, setSelectType] = useState<string>("title");
  const [searchParams, setSearchParams] =
    useRecoilState<SearchParam>(searchParamsState);
  const onFinish = (values: any) => {
    const result = values;
    result.skill = tags;
  };
  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };
  const { data: search } = useGetListQuery({
    variables: searchParams,
    options: {
      enabled: show,
      getNextPageParam: (lastPage) => {
        if (lastPage.results.length < 10) return;
        return lastPage.page + 1;
      },
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) !== -1) return;

    if (tags.length > 4) {
      const changeValue = [...tags];
      changeValue[2] = inputValue;
      setTags(changeValue);
    } else {
      setTags([...tags, inputValue]);
    }

    setInputVisible(false);
    setInputValue("");
  };
  const onChange = (e: RadioChangeEvent) => {
    setSelectType(e.target.value);
  };
  const onSearch = (keyword: string) => {
    const params = {
      keyword,
      type: selectType,
    };
    setSearchParams(params);
  };

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  return (
    <>
      <Form
        name="createBoard"
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 900, margin: "120px auto 50px" }}
      >
        <Form.Item name="title">
          <FormTitle placeholder="제목을 입력해주세요" />
        </Form.Item>
        <Form.Item name="description">
          <FormContents placeholder="내용을 입력해주세요" />
        </Form.Item>
        <Form.Item
          label="공고검색"
          style={{
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          <Button
            type="dashed"
            block
            icon={<PlusOutlined />}
            onClick={() => setShow(true)}
          >
            공고 추가하기
          </Button>
        </Form.Item>
        <FormSkill
          label="태그선택 (최대5개)"
          style={{
            padding: "10px",
          }}
        >
          <>
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
        </FormSkill>
        <FormSubmit>
          <Button>나가기</Button>
          <Button type="primary" htmlType="submit">
            등록
          </Button>
        </FormSubmit>
      </Form>
      <Modal
        open={show}
        title={<ModalHeaderStyle>공고검색</ModalHeaderStyle>}
        onCancel={() => setShow(false)}
        footer={<>하단</>}
      >
        <ModalBodyStyle>
          <SearchBar
            style={{ margin: "0 auto" }}
            onSearch={onSearch}
            onChange={onChange}
            selectType={selectType}
            filter={positionFilter}
          />
          {search ? (
            search.pages.map((el, idx) => <Box key={idx}>{idx}</Box>)
          ) : (
            <Box>검색결과가 없습니다.</Box>
          )}
        </ModalBodyStyle>
      </Modal>
    </>
  );
};

export default CommunityWriteComponent;

const FormTitle = styled(Input)`
  font-size: 20px;
  font-weight: bold;
  border: none;
  outline: none;
  box-shadow: none;
  border-color: #fff;
  border-bottom: 2px solid #ddd;
  border-radius: 0;
  padding: 10px;
  &:hover {
    border: none;
    outline: none;
    box-shadow: none;
    border-bottom: 2px solid #ddd;
  }
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
    border-bottom: 2px solid #ddd;
  }
`;
const FormContents = styled(Input.TextArea)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  line-height: 18px;
  resize: none !important;
  box-shadow: none !important;
  border: none;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
  outline: none !important;
  min-height: 30vh !important;
  height: auto !important;
`;
const FormSkill = styled(Form.Item)`
  label {
    font-weight: bold;
  }
`;
const FormSubmit = styled(Form.Item)`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  background: #fff;
  box-shadow: 2.194px 2.046px 7.6px 0.4px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: auto;
  padding: 10px;
  .ant-form-item-row {
    width: 900px;
    margin: 0 auto;
  }
  .ant-form-item-control-input-content {
    display: flex;
    justify-content: space-between !important;
    align-items: center !important;
  }
  button {
    display: inline-block;
    width: 160px;
    height: 40px;
    font-size: 16px;
  }
`;
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
const ModalHeaderStyle = styled.div`
  padding: 30px;
  font-weight: bold;
`;
const ModalBodyStyle = styled.div`
  padding: 30px;
`;
