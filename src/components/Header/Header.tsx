import { Layout, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

import CustomButton from "../CustomButton";
import { Paths } from "../../utils/paths";

import styles from "./header.module.css";

const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Paths.home}>
          <CustomButton type="ghost">
            <Typography.Title level={1}>Employees</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.register}>
          <CustomButton icon={<UserOutlined />}>Register</CustomButton>
        </Link>
        <Link to={Paths.login}>
          <CustomButton icon={<LoginOutlined />}>Login</CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  );
};

export default Header;
