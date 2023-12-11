import { Card, Form, Row, Space, Typography } from "antd";
import CustomInput from "../../components/CustomInput";
import PasswordInput from "../../components/PasswordInput";
import CustomButton from "../../components/CustomButton";
import { Link } from "react-router-dom";
import { Paths } from "../../utils/paths";

const LoginPage = () => {
  return (
    <Row align="middle" justify="center">
      <Card title="Sign in" style={{ width: "30rem" }}>
        <Form onFinish={() => {}}>
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
