import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { RootState } from '../../redux/store';

import styles from './path-to-book.module.scss';

export const PathToBook = () => {
  const info = useSelector((state: RootState) => state.books.book);
  const { category } = useParams();
  let allCategory = '';
  if (category === 'all') {
    allCategory = 'Все книги';
  }

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>{}</div>
      <div className={styles.content_wrapper}>
        <Link to={`/books/${category}`} data-test-id='breadcrumbs-link'>
          {allCategory || info?.categories[0]}
        </Link>
        <p className={styles.slash}>/</p>
        <p data-test-id='book-name'>{info?.title}</p>
      </div>
    </div>
  );
};
