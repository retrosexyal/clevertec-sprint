import React from "react";
import styles from "./book-button.module.scss";

type TProps = {
  title: string;
  className?: string;
};

export const BookButton: React.FC<TProps> = ({ title, className }) => {
  let buttonColor = "";
  if (title) {
    if (title.toLowerCase() === "забронирована") {
      buttonColor = styles.reserved;
    } else if (title.toLowerCase().startsWith("занята")) {
      buttonColor = styles.inactive;
    }
  }
  return (
    <div className={`${styles.wrapper} ${buttonColor} ${className} `}>
      {title || "забронировать"}
    </div>
  );
};
