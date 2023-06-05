import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";

import { PlusOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { debounce } from "lodash";
import WriteTag from "./_fragments/Write.Tag";
import PositionSearchModal from "../../common/PositionSearchModal";
import { useRecoilState } from "recoil";
import { PositionArtice, positionArticleState } from "recoil/position";
import CloseIcon from "components/common/@Icons/System/Close";
import { Flex } from "@chakra-ui/react";
import { UserInfo, userProfile as userType } from "apis/user/type";
import { useQueryClient } from "react-query";
import { QUERY_KEY } from "constants/query-keys";
import { getAccessToken } from "utils/sessionStorage/token";
import { CommunityList, ImyVariables } from "apis/community/type";
import communityApi from "apis/community";
import { ROUTES } from "constants/routes";
import { useNavigate, useParams } from "react-router-dom";
import PositionArticleCard from "components/common/PositionArticleCard";
import { sameArray } from "utils/sameArray";

interface ICommunityWriteComponentProps {
  editData?: CommunityList;
  isEdit?: boolean;
}

const CommunityWriteComponent = (props: ICommunityWriteComponentProps) => {
  const { editData, isEdit } = props;
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const params = useParams();
  const [isEnter, setIsEnter] = useState<boolean>(false);
  const [skillSelect, setSkillSelect] = useState<string[]>([]);
  const [positionArticle, setPositionArticle] =
    useRecoilState<PositionArtice>(positionArticleState);
  const [tags, setTags] = useState<string[]>(
    editData?.skill ? editData?.skill : []
  );

  const [show, setShow] = useState<boolean>(false);
  const token = getAccessToken();
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
    setPositionArticle(null);
    navigate(ROUTES.COMMUNITY_LIST.path);
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
      setPositionArticle(null);
      navigate(ROUTES.COMMUNITY_LIST.path);
    } catch (e) {
      console.log(e);
    }
  };
  const onEditFinish = async (values: any) => {
    if (!editData) return;
    if (tags.length > 0) values.skill = tags;
    const { title, description, skill } = values;
    const myVariables: ImyVariables = {};

    if (positionArticle?.positionId !== editData.positionArticle?.positionId) {
      myVariables.positionArticle = positionArticle;
    }

    if (title !== editData.title) {
      myVariables.title = title;
    }

    if (description !== editData.description) {
      myVariables.description = description;
    }

    if (!sameArray(skill, editData.skill)) {
      myVariables.skill = skill;
    }

    if (userInfo !== editData?.userInfo) {
      myVariables.userInfo = userInfo;
    }

    try {
      await communityApi.updateBoard(params.id, myVariables);
      alert("게시글이 수정되었습니다.");
      await queryClient.invalidateQueries([
        QUERY_KEY.COMMUNITY.GETARTICLE,
        params.id,
      ]);
      setPositionArticle(null);
      navigate(`${ROUTES.COMMUNITY_LIST.path}/${params.id}`);
    } catch (e) {
      console.log(e);
    }
  };
  const onCancelArticle = () => {
    const deleteArr = tags.filter((tag) => {
      return positionArticle?.skill && !positionArticle?.skill.includes(tag);
    });
    setTags(deleteArr);

    setPositionArticle(null);
  };

  useEffect(() => {
    if (!!positionArticle && !!positionArticle?.skill) {
      const maxLength = 7 - tags.length;
      const select = positionArticle?.skill?.slice(0, maxLength);

      setSkillSelect(select);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positionArticle]);

  useEffect(() => {
    if (!!skillSelect) {
      setTags((prevState) => [...prevState, ...(skillSelect ?? [])]);
    }
  }, [skillSelect]);

  useEffect(() => {
    if (!!editData?.positionArticle) {
      // setInitialSkill(editData?.positionArticle?.skill);
      setPositionArticle({ ...editData.positionArticle, skill: undefined });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit]);

  useEffect(() => {
    if (!!userProfile) {
      setUserInfo({
        userName: userProfile.name,
        profileimg: userProfile.profileimg,
        userId: userProfile._id,
      });
    }
  }, [userProfile]);

  const handleInputChange = debounce(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setIsEnter(true);
    },
    500
  );

  const showPositionPopup = async () => {
    setShow(true);
    await queryClient.invalidateQueries([QUERY_KEY.WEBCRAWLING.GETLIST]);
  };
  return (
    <>
      <Form
        name="createBoard"
        layout="vertical"
        onFinish={!isEdit ? onFinish : onEditFinish}
        style={{ maxWidth: 900, margin: "120px auto 50px" }}
        initialValues={{
          title: !!editData ? editData.title : "",
          description: !!editData ? editData.description : "",
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter" && !isEnter) e.preventDefault();
        }}
      >
        <Form.Item name="title">
          <FormTitle placeholder="제목을 입력해주세요" />
        </Form.Item>
        <Form.Item name="description">
          <FormContents
            placeholder="내용을 입력해주세요"
            onChange={(e) => handleInputChange(e)}
          />
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
              onClick={showPositionPopup}
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
          <WriteTag setTags={setTags} tags={tags} setIsEnter={setIsEnter} />
        </FormSkill>
        <FormSubmit>
          <Button onClick={onGoBack}>나가기</Button>
          <Button type="primary" htmlType="submit">
            {!isEdit ? "등록" : "수정"}
          </Button>
        </FormSubmit>
      </Form>
      {show && <PositionSearchModal show={show} setShow={setShow} />}
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
