import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { bookReducer } from './slices/book-slice';
import { bookThemeReducer } from './slices/book-theme-slice';
import { categoryReducer } from './slices/category-slice';
import { serchReducer } from './slices/serch-slice';
import { sortReducer } from './slices/sort-slice';

export const store = configureStore({
  reducer: {
    bookThemeReducer,
    books: bookReducer,
    categorys: categoryReducer,
    sort: sortReducer,
    serch: serchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AddDispatch>();
