import React from "react";
import styles from "./loader.module.scss";

import { ReactComponent as LoaderIcon } from "../../assets/svg/loader-icon.svg";

export const Loader = () =>(
  <div className={styles.wrapper} data-test-id='loader'>
    <LoaderIcon className={styles.loader} />
  </div>
);
