import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IBook, BooksState, ILinkedBook, ICategory, IStateCategoty } from '../../types/types';
import { Status } from '../../types/types';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  const newConfig = { ...config };
  const token = 'test';

  if (token) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const initialState: IStateCategoty = {
  categorys: [],
  loading: false,
  status: undefined,
};

export const fetchRegister = createAsyncThunk('CategorySlice/getCategory', async () => {
  const responce = await axiosInstance.post(`https://strapi.cleverland.by/api/categories`);
  const data = await responce.data;
  return data as typeof data;
});

export const categorySlice = createSlice({
  name: 'categorys',
  initialState,
  reducers: {
    getCategory(state, action: PayloadAction<ICategory[]>) {
      const thisState = state;
      thisState.categorys = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
      const thisState = state;
      thisState.categorys = action.payload;
      thisState.loading = false;
      thisState.status = Status.COMLETED;
    });
    builder.addCase(fetchCategory.pending, (state) => {
      const thisState = state;
      thisState.loading = true;
      thisState.status = Status.LOADING;
    });
    builder.addCase(fetchCategory.rejected, (state) => {
      const thisState = state;
      thisState.loading = false;
      thisState.status = Status.ERROR;
    });
  },
});

export const { getCategory } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
