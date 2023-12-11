import { Layout as AntLayout } from "antd";
import { Outlet } from "react-router-dom";

import Header from "../Header";

import styles from "./layout.module.css";

const Layout = () => {
  return (
    <div className={styles.main}>
      <AntLayout.Content style={{ height: "100%" }}>
        <Header />
        <Outlet />
      </AntLayout.Content>
    </div>
  );
};

export default Layout;
