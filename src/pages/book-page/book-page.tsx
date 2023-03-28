import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import emptyBookImg from '../../assets/png/empty-book-img.png';
import { ReactComponent as MenyToogleIcon } from '../../assets/svg/menu_toggle_icon.svg';
import { BookButton } from '../../components/buttons/book-button';
import { PathToBook } from '../../components/path-to-book';
import { Rating } from '../../components/rating';
import { Review } from '../../components/review';
import { Slider } from '../../components/slider';
import { arrOfBooks } from '../../constants/constants';
import { fetchBooks } from '../../redux/slices/book-slice';
import { RootState, useAppDispatch } from '../../redux/store';

import styles from './book-page.module.scss';

export const BookPage = () => {
  const [isActive, setIsActive] = useState(false);
  const { id } = useParams();
  const currentId = id?.startsWith(':') ? id.slice(1) : id;
  const dispatch = useAppDispatch();
  const currentBook = useSelector((state: RootState) => state.books.book);
  const book = arrOfBooks;

  const toggleComments = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    if (currentBook && id && `${currentBook.id}` === currentId) {
      const plug = {};
    } else dispatch(fetchBooks(currentId));
  }, [dispatch, id, currentBook, currentId]);

  return (
    <React.Fragment>
      {}
      {currentBook && (
        <section className='book-page'>
          <PathToBook />
          <div className={styles.main_info_wrapper}>
            <div className={styles.img_wrapper}>
              {currentBook?.images?.length !== 0 && currentBook && currentBook.images && (
                <Slider images={currentBook?.images} />
              )}
              {currentBook?.images?.length === 0 && <img src={emptyBookImg} alt='img' />}
            </div>
            <div className={styles.main_info_text}>
              <h2 data-test-id='book-title'>{currentBook.title}</h2>
              <p>{currentBook.authors.map((e) => e)}</p>
              <BookButton title={book[0].status || 'dsds'} className={styles.button} />
              <p
                className={
                  book[0].imgArr && book[0].imgArr?.length > 1
                    ? `${styles.styled_subtitle} ${styles.extra_margin}`
                    : styles.styled_subtitle
                }
              >
                О книге
              </p>
              <p className={styles.about_book_text}>{currentBook?.description}</p>
            </div>
          </div>

          <div className={styles.rating_container}>
            <p className={styles.styled_subtitle}>Рейтинг</p>
            <div className={styles.rating_wrapper}>
              {currentBook.rating !== 0 && <Rating rating={currentBook.rating} width='24px' height='24px' />}
              {currentBook.rating === 0 && (
                <Rating showEmpty={true} rating={currentBook.rating} width='24px' height='24px' />
              )}
              <p>{currentBook.rating ? currentBook.rating : 'ещё нет оценок'}</p>
            </div>
          </div>
          <p className={styles.styled_subtitle}>Подробная информация</p>
          <div className={styles.info_wrapper}>
            <div className={styles.column1}>
              <div className={styles.row}>
                <p className={styles.details_title}>Издательство</p>
                <p>{currentBook.publish}</p>
              </div>
              <div className={styles.row}>
                <p className={styles.details_title}>Год издания</p>
                <p>{currentBook.issueYear}</p>
              </div>
              <div className={styles.row}>
                <p className={styles.details_title}>Переплет</p>
                <p>{currentBook.cover}</p>
              </div>
              <div className={styles.row}>
                <p className={styles.details_title}>Формат</p>
                <p>{currentBook.format}</p>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.row}>
                <p className={styles.details_title}>Жанр</p>
                <p>{currentBook.categories[0]}</p>
              </div>
              <div className={styles.row}>
                <p className={styles.details_title}>Вес</p>
                <p>{currentBook.weight} г</p>
              </div>
              <div className={styles.row}>
                <p className={styles.details_title}>ISNB</p>
                <p>{currentBook.ISBN}</p>
              </div>
              <div className={styles.row}>
                <p className={styles.details_title}>Изготовитель</p>
                <p>{currentBook.producer}</p>
              </div>
            </div>
          </div>
          <div className={styles.reviews}>
            <p className={styles.styled_subtitle}>
              Отзывы
              {currentBook.comments ? (
                <p className={styles.review_counter}>{currentBook?.comments?.length}</p>
              ) : (
                <p className={styles.review_counter}>0</p>
              )}
              {currentBook.comments && (
                <button
                  onClick={toggleComments}
                  type='button'
                  className={styles.toggle}
                  data-test-id='button-hide-reviews'
                >
                  <MenyToogleIcon className={isActive ? '' : styles.toggle_closed} />
                </button>
              )}
            </p>
            {isActive && currentBook.comments && currentBook.comments.map((e) => <Review review={e} key={e.id} />)}
            <BookButton title='Оценить книгу' />
          </div>
        </section>
      )}{' '}
    </React.Fragment>
  );
};
