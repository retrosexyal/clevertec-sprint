import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';

import { Book } from '../../components/book';
import { routes } from '../../constants/routes';
import { fetchBooks } from '../../redux/slices/book-slice';
import { RootState, useAppDispatch } from '../../redux/store';
import { IBook, ICategory } from '../../types/types';

import styles from './books.module.scss';

export const Books = () => {
  const dispatch = useAppDispatch();
  const [currentCategory, setCurrentCategory] = useState<ICategory[]>([]);

  const { books, loading } = useSelector((state: RootState) => state.books);
  const { categorys } = useSelector((state: RootState) => state.categorys);
  const bookTheme = useSelector((state: RootState) => state.bookThemeReducer.value);
  const { value } = useSelector((state: RootState) => state.sort);
  const { searchValue } = useSelector((state: RootState) => state.serch);
  const { pathname } = useLocation();

  useEffect(() => {
    setCurrentCategory(categorys.filter((e) => pathname.includes(e.path)));
  }, [categorys, pathname, value]);

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooks(''));
    }
  }, [dispatch, books.length]);

  return (
    <div className={styles.wrapper}>
      {!loading &&
      books.length > 0 &&
      !pathname.endsWith('all') &&
      pathname !== '/' &&
      currentCategory[0] &&
      currentCategory[0].name
        ? [...books]
            .sort((a, b) => (a.rating > b.rating ? (value ? 1 : -1) : value ? -1 : 1))
            .filter((filtredBook) => filtredBook.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((e: IBook) => (
              <React.Fragment key={e.id}>
                {e.categories.includes(currentCategory[0].name) &&
                  books.filter((book) => book.categories.includes(currentCategory[0].name)).length !== 0 && (
                    <Link
                      to={`/books/${currentCategory[0].path}/${e.id}`}
                      key={e.id}
                      className={bookTheme ? styles.book_wrapp : styles.book_wrapp2}
                    >
                      <Book
                        img={`https://strapi.cleverland.by${e.image?.url}`}
                        rating={e?.rating}
                        name={e?.title}
                        autor={e?.authors[0]}
                        status={e.delivery?.dateHandedFrom}
                      />
                    </Link>
                  )}
                <React.Fragment>{pathname.endsWith('all')}</React.Fragment>
              </React.Fragment>
            ))
        : [...books]
            .sort((a, b) => (a.rating > b.rating ? (value ? 1 : -1) : value ? -1 : 1))
            .filter((filtredBook) => filtredBook.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((e: IBook) => (
              <Link to={`/books/all/${e.id}`} key={e.id} className={bookTheme ? styles.book_wrapp : styles.book_wrapp2}>
                <Book
                  img={`https://strapi.cleverland.by${e.image?.url}`}
                  rating={e?.rating}
                  name={e?.title}
                  autor={e?.authors[0]}
                  status={e.delivery?.dateHandedFrom}
                />
              </Link>
            ))}
      {!loading &&
        books.length > 0 &&
        currentCategory[0] &&
        currentCategory[0].name &&
        [...books].filter((book) => book.categories.includes(currentCategory[0].name)).length === 0 && (
          <div className={styles.emptyBookFlexCont}>
            <div className={styles.emptyBookCont} data-test-id='empty-category'>
              В этой категории книг ещё нет
            </div>
          </div>
        )}
      {!loading &&
        books.length > 0 &&
        [...books].filter((filtredBook) => filtredBook.title.toLowerCase().includes(searchValue.toLowerCase()))
          .length === 0 && (
          <div className={styles.emptyBookFlexCont}>
            <div className={styles.emptyBookCont} data-test-id='search-result-not-found'>
              По запросу ничего не найдено
            </div>
          </div>
        )}
    </div>
  );
};
