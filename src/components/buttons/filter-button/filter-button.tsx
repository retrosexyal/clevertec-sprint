import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as Ico } from '../../../assets/svg/filter-button-ico.svg';
import { ReactComponent as Icon } from '../../../assets/svg/sort-icon.svg';
import { setSort } from '../../../redux/slices/sort-slice';
import { RootState } from '../../../redux/store';

import styles from './filter-button.module.scss';

export const FilterButton = () => {
  const { value } = useSelector((state: RootState) => state.sort);
  const dispatch = useDispatch();

  const handleSort = () => {
    dispatch(setSort());
  };

  return (
    <button type='button' onClick={handleSort} className={styles.wrapper} data-test-id='sort-rating-button'>
      {!value ? <Ico /> : <Icon />}
      <p>По рейтингу</p>
    </button>
  );
};
