import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { routes } from './constants/routes';
import { Footer } from './containers/footer';
import { Header } from './containers/header';
import { LoaderErrorCont } from './containers/loader-error-cont';
import { BookPage } from './pages/book-page';
import { MainPage } from './pages/main';
import { store } from './redux/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <LoaderErrorCont />
        <div className='wrapper'>
          <Header />
          <Routes>
            <Route path='/*' element={<MainPage />} />
            <Route path='/books/:category/:id' element={<BookPage />} />
          </Routes>
          <Footer />
        </div>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
