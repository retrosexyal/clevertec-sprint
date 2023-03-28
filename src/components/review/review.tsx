import React from "react";
import styles from "./review.module.scss";
import ava from "../../assets/png/avatar.png";
import { Rating } from "../rating";
import { Comment } from "../../types/types";

type TProps = {
  review: Comment;
  className?: string;
};

export const Review: React.FC<TProps> = ({ review, className }) => {
  const date = new Date(review.createdAt);
  const formattedDate = date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
  <div>
    <div>
      <div className={styles.review}>
        <div className={styles.img_wrapper}>
          <img src={ava} alt="img" />
        </div>
        <div className={styles.styled_autor_wrapper}>
          <p
            className={styles.styled_autor}
          >{`${review.user?.firstName} ${review.user?.lastName}`}</p>
          <p className={styles.styled_autor}>{`${formattedDate}`}</p>
        </div>
      </div>
      <Rating rating={review.rating} width="24px" height="24px" />
    </div>
    <div className={styles.review_text}>{review.text}</div>
  </div>
);}
