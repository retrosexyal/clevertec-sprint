import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as Cross } from '../../../assets/svg/cross_icon.svg';
import { ReactComponent as Ico } from '../../../assets/svg/search-ico.svg';
import { setSerch } from '../../../redux/slices/serch-slice';

import styles from './search.module.scss';

export const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();

  const handleInput = () => {
    setIsActive(true);
  };
  const handleCloseInput = () => {
    setIsActive(false);
  };
  const resize = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleSerch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSerch(e.target.value));
  };
  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };

  useEffect(() => {
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [resize]);

  return (
    <div className={styles.wrapper}>
      <button type='button' onClick={handleInput} className={styles.ico} data-test-id='button-search-open'>
        <Ico className={isFocus ? styles.fill_svg : ''} />
      </button>
      <input
        className={!isActive ? ` ${styles.input}` : `${styles.input} ${styles.input_active}`}
        type='text'
        placeholder='Поиск книги или автора…'
        data-test-id='input-search'
        onChange={handleSerch}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isActive && (
        <button type='button' className={styles.cross} onClick={handleCloseInput} data-test-id='button-search-close'>
          <Cross />
        </button>
      )}
    </div>
  );
};
