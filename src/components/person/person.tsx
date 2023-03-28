import React from "react";
import avatar from '../../assets/png/avatar.png';
import styles from './person.module.scss'

type TProps = {
  greetings: string;
  className?: string;
};

export const Person: React.FC<TProps> = ({ greetings,className }) => (
  <div className={`${styles.person_wrapper} ${className}`}>
    <p>{greetings}</p>
    <div className={styles.img_wrapper}>
      <img src={avatar} className={styles.img} alt="avatar img" />
    </div>
  </div>
);
