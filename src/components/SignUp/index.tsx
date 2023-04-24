import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Button, Form, Input } from "antd";
import userApi from "apis/user";
import { CreateUser } from "apis/user/type";
import { useNavigate } from "react-router-dom";

const SignUpComponent = () => {
  const navigate = useNavigate();

  const onFinish = async (values: CreateUser) => {
    try {
      await userApi.createUser(values);
      alert("회원가입이 완료되었습니다! 로그인을 해주세요!");
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Wrapper>
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
          회원가입
        </Text>
        <Form.Item
          name="name"
          label="닉네임"
          rules={[{ required: true, message: "닉네임 입력해주세요." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="이메일"
          rules={[{ required: true, message: "이메일을 입력해주세요." }]}
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
            회원가입하기
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default SignUpComponent;

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
