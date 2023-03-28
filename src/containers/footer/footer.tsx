import React from "react";

import { SocialBar } from "../../components/social-bar";

import styles from "./footer.module.scss";

export const Footer = () => (
  <footer className={styles.wrapper}>
    <p>© 2020-2023 Cleverland. Все права защищены.</p>
    <SocialBar />
  </footer>
);
