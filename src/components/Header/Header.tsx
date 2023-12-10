import { Button, Layout, Space, Typography } from "antd";
import { TeamOutlined } from "@ant-design/icons";

import styles from "./header.module.css";

const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Button type="link">Click</Button>
      </Space>
    </Layout.Header>
  );
};

export default Header;
