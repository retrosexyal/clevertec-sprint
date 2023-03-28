import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./burger-menu-comp.module.scss";
import { routes } from "../../constants/routes";

export const BurgerMenuComp = () => (
  <div className={styles.wrapper}>
    <NavLink to={routes.profile} className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.link}` : styles.link
        }>Профиль</NavLink>
    <NavLink to={routes.exit}  className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.link}` : styles.link
        }>Выход</NavLink>
  </div>
);
