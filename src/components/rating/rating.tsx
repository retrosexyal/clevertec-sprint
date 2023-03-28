import React, { useEffect, useState } from "react";
import styles from "./rating.module.scss";
import { ReactComponent as Star } from "../../assets/svg/Icon_star.svg";
import { ReactComponent as EmptyStar } from "../../assets/svg/empty_Icon_star.svg";

type TProps = {
  rating: number | undefined;
  width?: string;
  height?: string;
  showEmpty?: boolean;
};

export const Rating: React.FC<TProps> = ({
  rating,
  width,
  height,
  showEmpty = false,
}) => {
  const [arr, setArr] = useState([0]);
  const idArr: number[] = [];
  useEffect(() => {
    const ratingArr: number[] = [];
    for (let i = 0; i < 5; i++) {
      if (rating && rating > i) {
        ratingArr.push(1);
      } else {
        ratingArr.push(0);
      }
    }
    setArr(ratingArr);
  }, [rating]);

  return (
    <div className={styles.wrapper}>
      {(rating &&
        
        arr.map((e, ind) => {
          idArr.push(ind);
          return e === 1 ? (
            <Star
              width={width}
              height={height}
              fill="#FFBC1F"
              key={idArr[ind]}
            />
          ) : (
            <EmptyStar width={width} height={height} key={idArr[ind]} />
          );
        })) || !showEmpty &&
        "еще нет оценок"}
      {!rating &&
        showEmpty &&
        arr.map((e, ind) => {
          idArr.push(ind);
          return <EmptyStar width={width} height={height} key={idArr[ind]} />;
        })}
    </div>
  );
};
