import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";

import { PlusOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

import WriteTag from "./_fragments/Write.Tag";
import PositionSearchModal from "../../common/PositionSearchModal";
import { useRecoilState } from "recoil";
import { PositionArtice, positionArticleState } from "recoil/position";
import CloseIcon from "components/common/@Icons/System/Close";
import { Flex } from "@chakra-ui/react";
import { userProfile as userType } from "apis/user/type";
import { useQueryClient } from "react-query";
import { QUERY_KEY } from "constants/query-keys";
import { getToken } from "utils/sessionStorage/token";
import { UserInfo } from "apis/\bcommunity/type";
import communityApi from "apis/\bcommunity";
import { ROUTES } from "constants/routes";
import { useNavigate } from "react-router-dom";
import PositionArticleCard from "components/common/PositionArticleCard";

const CommunityWriteComponent = () => {
  const queryClient = useQueryClient();
  const navigete = useNavigate();
  const [positionArticle, setPositionArticle] =
    useRecoilState<PositionArtice>(positionArticleState);
  const [tags, setTags] = useState<string[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const token = getToken();
  const userProfile = queryClient.getQueryData<userType>([
    QUERY_KEY.USER.PROFILE,
    token,
  ]);

  const [userInfo, setUserInfo] = useState<UserInfo>({
    userId: "",
    profileimg: "",
    userName: "",
  });
  const onGoBack = () => {
    alert("작성중인 게시글은 저장되지 않습니다.");
    setPositionArticle(undefined);
    navigete(ROUTES.COMMUNITY.LIST);
  };
  const onFinish = async (values: any) => {
    const result = values;
    result.userInfo = userInfo;
    if (tags.length > 0) result.skill = tags;
    if (!!positionArticle)
      result.positionArticle = {
        positionId: positionArticle.positionId,
        title: positionArticle.title,
        company: positionArticle.company,
        url: positionArticle.url,
      };

    try {
      await communityApi.createBoard(result);
      alert("게시글이 작성되었습니다.");
      await queryClient.invalidateQueries([QUERY_KEY.COMMUNITY.GETLIST]);
      console.log(result);
      setPositionArticle(undefined);
      navigete(ROUTES.COMMUNITY.LIST);
    } catch (e) {
      console.log(e);
    }
  };
  const onCancelArticle = () => {
    const deleteArr = tags.filter((tag) => {
      return positionArticle?.skill && !positionArticle?.skill.includes(tag);
    });
    setTags(deleteArr);

    setPositionArticle(undefined);
  };

  useEffect(() => {
    const maxLength = 7 - tags.length;
    const skillSelect = positionArticle?.skill?.slice(0, maxLength);
    setTags((prevState) => [...prevState, ...(skillSelect ?? [])]);
  }, [positionArticle, tags.length]);

  useEffect(() => {
    if (!!userProfile) {
      setUserInfo({
        userName: userProfile.name,
        profileimg: userProfile.profileimg,
        userId: userProfile._id,
      });
    }
  }, [userProfile]);

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
          label="관련공고선택"
          style={{
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          {!!positionArticle ? (
            <Flex alignItems="center">
              <CloseIcon
                style={{ cursor: "pointer" }}
                onClick={onCancelArticle}
              />
              <PositionArticleCard
                url={positionArticle.url}
                company={positionArticle.company}
                title={positionArticle.title}
              />
            </Flex>
          ) : (
            <Button
              type="dashed"
              block
              icon={<PlusOutlined />}
              onClick={() => setShow(true)}
            >
              공고 추가하기
            </Button>
          )}
        </Form.Item>
        <FormSkill
          label="태그추가 (최대 7개)"
          style={{
            padding: "10px",
          }}
        >
          <WriteTag setTags={setTags} tags={tags} />
        </FormSkill>
        <FormSubmit>
          <Button onClick={onGoBack}>나가기</Button>
          <Button type="primary" htmlType="submit">
            등록
          </Button>
        </FormSubmit>
      </Form>
      <PositionSearchModal show={show} setShow={setShow} />
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
