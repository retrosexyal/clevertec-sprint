import React from "react";
import styles from "./logo.module.scss";
import { ReactComponent as LogoClevertec } from "../../assets/svg/logo-clevertec_40.svg";
import { ReactComponent as LogoCleverland } from "../../assets/svg/Cleverland.svg";

export const Logo = () => (
  <div className={styles.logo_wrapper}>
    <LogoClevertec />

    <div className={styles.text_wrapper}>
      <LogoCleverland />
    </div>
  </div>
);
