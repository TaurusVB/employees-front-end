import { Puff } from "react-loader-spinner";

import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.LoaderContainer}>
      <Puff
        height={"100"}
        width={"100"}
        radius={1}
        color="#0076ca"
        ariaLabel="puff-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
