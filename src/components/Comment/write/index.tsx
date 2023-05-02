import { Button, Form, Input } from "antd";
import { useQueryClient } from "react-query";
import { getToken } from "utils/sessionStorage/token";
import { UserInfo, userProfile as userType } from "apis/user/type";
import { QUERY_KEY } from "constants/query-keys";
import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import commentApi from "apis/comment";
import { useEffect, useState } from "react";
import { ProfileSmallImg } from "assets/style/common";
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
          {userProfile && (
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
          )}

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
