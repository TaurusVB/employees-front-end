import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Form, Row, Space, Typography } from "antd";

import CustomInput from "../../components/CustomInput";
import PasswordInput from "../../components/PasswordInput";
import CustomButton from "../../components/CustomButton";
import { Paths } from "../../utils/paths";
import { UserData, useLoginMutation } from "../../app/services/auth";
import { isErrorWithMessage } from "../../utils/isErrorWithMessage";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/selectors";

const LoginPage = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [loginUser, loginUserResult] = useLoginMutation();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const [error, setError] = useState("");

  const onLogin = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();

      navigate("/");
    } catch (error) {
      const isErrorWithMess = isErrorWithMessage(error);

      if (isErrorWithMess) {
        setError(error.data.message);
      } else {
        setError("Semething went wrong...");
      }
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
          <Typography.Text>
            First time using Employees?{" "}
            <Link to={Paths.register}>Create an account</Link>
          </Typography.Text>
          <ErrorMessage message={error} />
        </Space>
      </Card>
    </Row>
  );
};

export default LoginPage;
