import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '../../constants/routes';
import { Books } from '../../containers/books';
import { Menu } from '../../containers/menu';
import { Navbar } from '../../containers/navbar';
import { Contract } from '../contract';
import { Rules } from '../rules';

import styles from './main-page.module.scss';

export const MainPage = () => (
  <section className={styles.wrapper}>
    <Menu className={styles.none} />
    <div>
      <Routes>
        <Route path='rules' element={<Rules />} />
        <Route path='contract' element={<Contract />} />
        <Route
          path=''
          element={
            <React.Fragment>
              <Navbar />
              <Books />
            </React.Fragment>
          }
        />
        <Route
          path={routes.main}
          element={
            <React.Fragment>
              <Navbar />
              <Books />
            </React.Fragment>
          }
        />
        <Route
          path={routes.booksBusiness}
          element={
            <React.Fragment>
              <Navbar />
              <Books />
            </React.Fragment>
          }
        />
        <Route
          path={routes.booksChildish}
          element={
            <React.Fragment>
              <Navbar />
              <Books />
            </React.Fragment>
          }
        />
        <Route
          path={routes.booksDesign}
          element={
            <React.Fragment>
              <Navbar />
              <Books />
            </React.Fragment>
          }
        />
        <Route
          path={routes.booksFiction}
          element={
            <React.Fragment>
              <Navbar />
              <Books />
            </React.Fragment>
          }
        />
        <Route
          path={routes.booksFiction}
          element={
            <React.Fragment>
              <Navbar />
              <Books />
            </React.Fragment>
          }
        />
        <Route
          path={routes.booksHobby}
          element={
            <React.Fragment>
              <Navbar />
              <Books />
            </React.Fragment>
          }
        />
        <Route
          path={routes.booksNonFiction}
          element={
            <React.Fragment>
              <Navbar />
              <Books />
            </React.Fragment>
          }
        />
        <Route
          path={routes.booksOther}
          element={
            <React.Fragment>
              <Navbar />
              <Books />
            </React.Fragment>
          }
        />
        <Route
          path={routes.booksParents}
          element={
            <React.Fragment>
              <Navbar />
              <Books />
            </React.Fragment>
          }
        />
        <Route
          path={routes.booksProgramming}
          element={
            <React.Fragment>
              <Navbar />
              <Books />
            </React.Fragment>
          }
        />
        <Route
          path={routes.booksPsychology}
          element={
            <React.Fragment>
              <Navbar />
              <Books />
            </React.Fragment>
          }
        />
      </Routes>
    </div>
  </section>
);
