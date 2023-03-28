import React, { ReactFragment } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./radio-input.module.scss";

export const RadioInput = ({
  name,
  title,
  defaultChecked,
  children,
  path
}: {
  name: string;
  title?: string;
  defaultChecked?: boolean;
  children?: ReactFragment;
  path:string;
}) => (
  <label className={styles.label}>
    <input
      className={styles.input}
      type="radio"
      name={name}
      defaultChecked={defaultChecked}
    />
    <div>
      <NavLink to={path} className={({ isActive }) =>
          isActive ? `${styles.active} ` : ""
        }>
        {children}
        {title}
      </NavLink>
    </div>
  </label>
);
