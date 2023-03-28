import React from "react";
import styles from "./button-icon.module.scss";

type TProps = {
  children: React.ReactNode;
  isCheked?: boolean;
};


export const ButtonIcon = ({isCheked, children }: TProps) =>(
  <div className={`${styles.wrapper} ${isCheked && styles.checked}`}>
      {children}
  </div>
);
