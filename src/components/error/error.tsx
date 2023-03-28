import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as Cross } from '../../assets/svg/cross_icon.svg';
import { ReactComponent as Warning } from '../../assets/svg/warning-icon.svg';
import { RootState } from '../../redux/store';
import { Status } from '../../types/types';

import styles from './error.module.scss';

export const Error = () => {
  const [isClose, setIsClose] = useState(false);
  const { status } = useSelector((state: RootState) => state.books);
  const categorys = useSelector((state: RootState) => state.categorys);
  const closingMenu = () => {
    setIsClose(true);
  };

  useEffect(() => {
    if (status !== Status.ERROR && categorys.status !== Status.ERROR) {
      setIsClose(true);
    }
  }, [categorys.status, status]);

  return (
    <div className={!isClose ? styles.wrapper : styles.display_none} data-test-id='error'>
      <div className={styles.swg_wrapper}>
        <Warning />
      </div>
      <div className={styles.text}>Что-то пошло не так. Обновите страницу через некоторое время</div>
      <button type='button' onClick={closingMenu}>
        <Cross fill='#363636' />
      </button>
    </div>
  );
};
