import { Button, Form, Input } from "antd";
import { useQueryClient } from "react-query";
import { getToken } from "utils/sessionStorage/token";
import { userProfile as userType } from "apis/user/type";
import { QUERY_KEY } from "constants/query-keys";
import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
const { TextArea } = Input;

const CommentWrtieComponent = () => {
  const [form] = Form.useForm();
  const token = getToken();
  const queryClient = useQueryClient();
  const userProfile = queryClient.getQueryData<userType>([
    QUERY_KEY.USER.PROFILE,
    token,
  ]);

  const onSubmitValue = (values: any) => {
    console.log(values);
  };
  return (
    <Form
      form={form}
      onFinish={(values) => {
        onSubmitValue(values);
        form.resetFields();
      }}
      initialValues={{
        contents: "",
        writer: "",
        rating: 0,
      }}
    >
      <div style={{ position: "relative" }}>
        {userProfile && (
          <Flex alignItems="center" p="5px 0 15px">
            <ProfileImg>
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/assets/image/profile/파일 ${
                    Number(userProfile.profileimg) + 1
                  }.svg`
                }
                alt="homeheader_profile"
              />
            </ProfileImg>
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
  );
};
export default CommentWrtieComponent;

const ProfileImg = styled.div`
  width: 28px;
  height: 28px;
  overflow: hidden;
  border-radius: 50%;
  > img {
    width: 100%;
  }
`;
const SubmitButtonWrap = styled(Form.Item)`
  position: absolute;
  bottom: 8px;
  right: 8px;
  margin: 0 !important;
`;
