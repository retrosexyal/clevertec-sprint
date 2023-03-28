import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as Action } from '../../assets/svg/Icon_Action.svg';
import { ReactComponent as Square } from '../../assets/svg/icon-square-four.svg';
import { ButtonIcon } from '../../components/buttons';
import { FilterButton } from '../../components/buttons/filter-button';
import { Search } from '../../components/inputs/search';
import { setBookTheme } from '../../redux/slices/book-theme-slice';

import styles from './navbar.module.scss';

interface RootState {
  bookThemeReducer: {
    value: boolean;
  };
}

export const Navbar = () => {
  const reduxIsCheked = useSelector((state: RootState) => state.bookThemeReducer.value);

  const dispatch = useDispatch();

  const handleClick1 = () => {
    if (!reduxIsCheked) {
      dispatch(setBookTheme());
    }
  };
  const handleClick2 = () => {
    if (reduxIsCheked) {
      dispatch(setBookTheme());
    }
  };

  return (
    <nav className={styles.wrapper}>
      <div className={styles.search_filter_wrapper}>
        <Search />
        <FilterButton />
      </div>
      <div className={styles.wrapper_ico}>
        <button data-test-id='button-menu-view-window' className={styles.button} type='button' onClick={handleClick1}>
          <ButtonIcon isCheked={reduxIsCheked}>
            <Square fill={reduxIsCheked ? 'white' : '#A7A7A7'} />
          </ButtonIcon>
        </button>
        <button data-test-id='button-menu-view-list' className={styles.button} type='button' onClick={handleClick2}>
          <ButtonIcon isCheked={!reduxIsCheked}>
            <Action fill={!reduxIsCheked ? 'white' : '#A7A7A7'} />
          </ButtonIcon>
        </button>
      </div>
    </nav>
  );
};
