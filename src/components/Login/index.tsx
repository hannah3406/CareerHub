import { Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Alert, Button, Form, Input } from "antd";
import { usePostLoginUser } from "apis/auth/mutation";
import { LoginData } from "apis/auth/type";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigete = useNavigate();
  const { mutate: postLoginUserMutate } = usePostLoginUser({
    options: {
      onSuccess: () => navigete("/"),
    },
  });
  const [errMsg, setErrMsg] = useState<string | undefined>(undefined);
  const onFinish = async (values: LoginData) => {
    setErrMsg(undefined);
    try {
      postLoginUserMutate(values);

      // window.location.replace("/");
    } catch (e: any) {
      setErrMsg(e.response.data.message[0]);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Wrapper>
      {errMsg && (
        <Alert message="Error" description={errMsg} type="error" showIcon />
      )}

      <Form
        name="basic"
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Text
          w="300px"
          textStyle="lg"
          m="15px auto"
          mb="30px"
          color="#000"
          textAlign="center"
          fontWeight="bold"
        >
          로그인
        </Text>
        <Form.Item
          name="email"
          label="이메일"
          rules={[
            {
              type: "email",
              message: "유효한 이메일 형식이 아닙니다.",
            },
            {
              required: true,
              message: "이메일을 입력해주세요!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="비밀번호"
          rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            로그인하기
          </Button>
        </Form.Item>
        <Flex justifyContent="space-between" w="300px" m="0 auto">
          <div>계정이 없나요?</div>
          <Link to={"/signup"} style={{ fontWeight: "bold" }}>
            회원가입
          </Link>
        </Flex>
      </Form>
    </Wrapper>
  );
};

export default LoginComponent;

const Wrapper = styled.div`
  padding: 30px 0;
  form {
    margin: 50px auto;
    text-align: center;
    .form-label {
      margin-bottom: 5px;
      display: inline-block;
    }
    .ant-form-item-row {
      display: inline-block;
      width: 450px;
    }
    .ant-form-item-control {
      text-align: left;
      margin: 0 auto;
      font-size: 14px;
    }
    .ant-form-item-label {
      width: 100%;
      text-align: left;
      font-weight: bold;
    }
    .ant-form-item-control-input-content {
      width: 100%;
      > button {
        width: 100%;
        font-weight: bold;
        font-size: 16px;
        height: 40px;
      }
    }
  }
`;
