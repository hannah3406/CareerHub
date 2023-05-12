import { Flex, Text, useBreakpoint } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Alert, Button, Form, Input } from "antd";
import authApi from "apis/auth";
import { LoginData } from "apis/auth/type";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  const breakpoint = useBreakpoint();
  const [errMsg, setErrMsg] = useState<string | undefined>(undefined);

  const onFinish = async (values: LoginData) => {
    setErrMsg(undefined);
    try {
      await authApi.loginUser(values);
      navigate("/");
    } catch (e: any) {
      setErrMsg(e.response.data.message[0]);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("로그인 실패:", errorInfo);
  };

  return (
    <Wrapper breakpoint={breakpoint === "base"}>
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
          mb={{ base: "10px", sm: "30px" }}
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
        <Flex
          justifyContent="space-between"
          w={{ base: "450px", sm: "300px" }}
          m="0 auto"
          fontSize={{ base: "18px", sm: "14px" }}
        >
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

const Wrapper = styled.div<{ breakpoint: boolean }>`
  padding: ${(props) => (props.breakpoint ? "2px" : "30px 0")};
  form {
    margin: ${(props) => (props.breakpoint ? "25px auto" : "50px auto")};
    text-align: center;
    .form-label {
      margin-bottom: ${(props) => (props.breakpoint ? "2px" : "5px")};
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
    .ant-form-item-label label {
      font-size: ${(props) => (props.breakpoint ? "18px" : "14px")};
    }
    .ant-input-suffix {
      font-size: ${(props) => (props.breakpoint ? "18px" : "14px")};
    }
    .ant-form-item-control-input-content {
      width: 100%;
      > button {
        width: 100%;
        font-weight: bold;
        font-size: ${(props) => (props.breakpoint ? "20px" : "16px")};
        height: ${(props) => (props.breakpoint ? "50px" : "40px")};
      }
    }
    .ant-input-affix-wrapper {
      padding: ${(props) => (props.breakpoint ? "11px" : "4px 11px")};
    }
    input {
      padding: ${(props) => (props.breakpoint ? "11px" : "4px 11px")};
    }
  }
`;
