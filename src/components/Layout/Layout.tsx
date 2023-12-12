import { Layout as AntLayout } from "antd";
import { Outlet } from "react-router-dom";

import Header from "../Header";

import styles from "./layout.module.css";
import { useCurrentQuery } from "../../app/services/auth";
import Loader from "../Loader";

const Layout = () => {
  const { isLoading } = useCurrentQuery();

  return (
    <>
      {isLoading && <Loader />}

      <div className={styles.main}>
        <AntLayout.Content style={{ height: "100%" }}>
          <Header />
          <Outlet />
        </AntLayout.Content>
      </div>
    </>
  );
};

export default Layout;
