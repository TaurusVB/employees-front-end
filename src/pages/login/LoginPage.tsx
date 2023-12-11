import { Link } from "react-router-dom";
import { Card, Form, Row, Space, Typography } from "antd";

import CustomInput from "../../components/CustomInput";
import PasswordInput from "../../components/PasswordInput";
import CustomButton from "../../components/CustomButton";
import { Paths } from "../../utils/paths";
import { UserData, useLoginMutation } from "../../app/services/auth";

const LoginPage = () => {
  const [loginUser, loginUserResult] = useLoginMutation();

  const onLogin = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row align="middle" justify="center">
      <Card title="Sign in" style={{ width: "30rem" }}>
        <Form onFinish={onLogin}>
          <CustomInput type="email" name="email" placeholder="Email" />
          <PasswordInput name="password" placeholder="Password" />
          <CustomButton type="primary" htmlType="submit">
            Login
          </CustomButton>
        </Form>
        <Space direction="vertical" size="large">
          <Typography>
            First time using Employees?{" "}
            <Link to={Paths.register}>Create an account</Link>
          </Typography>
        </Space>
      </Card>
    </Row>
  );
};

export default LoginPage;
