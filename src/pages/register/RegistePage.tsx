import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Card, Form, Row, Space, Typography } from "antd";

import CustomInput from "../../components/CustomInput";
import PasswordInput from "../../components/PasswordInput";
import CustomButton from "../../components/CustomButton";
import { Paths } from "../../utils/paths";
import { selectUser } from "../../features/auth/selectors";

const RegisterPage = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <Row align="middle" justify="center">
      <Card title="Register" style={{ width: "30rem" }}>
        <Form onFinish={() => {}}>
          <CustomInput name="name" placeholder="Username" />
          <CustomInput
            type="email"
            name="email"
            placeholder="example@example.com"
          />
          <PasswordInput
            name="password"
            placeholder="Password should consist of at least 6 characters"
          />
          <PasswordInput
            name="confirmPassword"
            placeholder="Please re-enter your password"
          />
          <CustomButton type="primary" htmlType="submit">
            Sign Up
          </CustomButton>
        </Form>
        <Space direction="vertical" size="large">
          <Typography.Text>
            Already have an account? <Link to={Paths.login}>Login.</Link>
          </Typography.Text>
        </Space>
      </Card>
    </Row>
  );
};

export default RegisterPage;
