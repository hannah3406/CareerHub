import { Button, Form, Input } from "antd";
import { useQueryClient } from "react-query";

import { UserInfo, userProfile as userType } from "apis/user/type";
import { QUERY_KEY } from "constants/query-keys";
import { Box, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import commentApi from "apis/comment";
import { useEffect, useState } from "react";
import { ProfileSmallImg } from "assets/style/common";
import { useNavigate } from "react-router-dom";
import ROUTES from "constants/routes";
import { getToken } from "utils/sessionStorage/token";
const { TextArea } = Input;

interface ICommentWrtieComponentProps {
  title: string;
  boardId: string;
}
const CommentWrtieComponent = ({
  title,
  boardId,
}: ICommentWrtieComponentProps) => {
  const [form] = Form.useForm();
  const token = getToken();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const userProfile = queryClient.getQueryData<userType>([
    QUERY_KEY.USER.PROFILE,
    token,
  ]);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userId: "",
    profileimg: "",
    userName: "",
  });
  const onSubmitValue = async (values: { contents: string }) => {
    const { contents } = values;
    const boardInfo = {
      title,
      boardId,
    };

    const results = {
      contents,
      boardInfo,
      userInfo,
    };
    try {
      await commentApi.createComment(results);
      alert("댓글이 등록되었습니다.");

      await queryClient.invalidateQueries([
        QUERY_KEY.COMMUNITY.GETARTICLE,
        boardId,
      ]);
      await queryClient.invalidateQueries([QUERY_KEY.COMMUNITY.GETLIST]);
      await queryClient.invalidateQueries([QUERY_KEY.RECOMMEND.GETLIST]);
    } catch (e) {
      console.log(e);
    }
  };
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
    <Box bg="#eee" p="10px 40px">
      {userProfile ? (
        <Form
          form={form}
          onFinish={(values) => {
            onSubmitValue(values);
            form.resetFields();
          }}
          initialValues={{
            contents: "",
          }}
        >
          <div style={{ position: "relative" }}>
            <Flex alignItems="center" p="5px 0 15px">
              <ProfileSmallImg>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/image/profile/파일 ${
                      Number(userProfile.profileimg) + 1
                    }.svg`
                  }
                  alt="homeheader_profile"
                />
              </ProfileSmallImg>
              <Box fontSize="14px" margin="0 5px">
                {userProfile.name}
              </Box>
            </Flex>

            <Form.Item name="contents">
              <TextArea
                style={{
                  padding: "15px 15px 40px 15px",
                }}
                autoSize={{ minRows: 2 }}
                placeholder="댓글을 입력해주세요."
              />
            </Form.Item>
            <SubmitButtonWrap>
              <Button type="primary" htmlType="submit">
                등록
              </Button>
            </SubmitButtonWrap>
          </div>
        </Form>
      ) : (
        <Text
          onClick={() => navigate(ROUTES.LOGIN.path)}
          color="#888"
          fontSize="14px"
          cursor="pointer"
          _hover={{ color: "#333" }}
        >
          로그인 후 이용해주세요.
        </Text>
      )}
    </Box>
  );
};
export default CommentWrtieComponent;

const SubmitButtonWrap = styled(Form.Item)`
  position: absolute;
  bottom: 8px;
  right: 8px;
  margin: 0 !important;
`;
