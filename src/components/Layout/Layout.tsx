import { FC, ReactNode } from "react";
import { Layout as AntLayout } from "antd";

import Header from "../Header";

import styles from "./layout.module.css";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <AntLayout.Content style={{ height: "100%" }}>
        <Header />
        {children}
      </AntLayout.Content>
    </div>
  );
};

export default Layout;
