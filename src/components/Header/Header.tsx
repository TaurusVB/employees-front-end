import { useDispatch, useSelector } from "react-redux";
import { Layout, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginOutlined,
  LogoutOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import CustomButton from "../CustomButton";
import { Paths } from "../../utils/paths";
import { selectUser } from "../../features/auth/selectors";
import { logout } from "../../features/auth/authSlice";

import styles from "./header.module.css";

const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Paths.home}>
          <CustomButton type="link">
            <Typography.Title level={1}>Employees</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      {user ? (
        <CustomButton icon={<LogoutOutlined />} onClick={handleLogOut}>
          Log out
        </CustomButton>
      ) : (
        <Space>
          <Link to={Paths.register}>
            <CustomButton icon={<UserOutlined />}>Register</CustomButton>
          </Link>
          <Link to={Paths.login}>
            <CustomButton icon={<LoginOutlined />}>Login</CustomButton>
          </Link>
        </Space>
      )}
    </Layout.Header>
  );
};

export default Header;
