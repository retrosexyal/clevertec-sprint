import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { IBook, BooksState, ILinkedBook } from "../../types/types";
import { Status } from "../../types/types";

const initialState: BooksState = {
  books: [],
  loading: false,
  status: Status.LOADING,
  book: undefined,
};

export const fetchBooks = createAsyncThunk(
  "bookSlice/getBooks",
  async (id?: string) => {
    const responce = await axios.get(
      `https://strapi.cleverland.by/api/books/${id || ""}`
    );
    const data = await responce.data;
    return data as typeof data;
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooks(state, action: PayloadAction<BooksState>) {
      const thisState = state;
      thisState.books = action.payload.books;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchBooks.fulfilled,
      (state, action: PayloadAction<IBook[] | ILinkedBook>) => {
        const thisState = state;
        if (Array.isArray(action.payload)) {
          thisState.books = action.payload as IBook[];
        } else {
          thisState.book = action.payload as ILinkedBook;
        }
        thisState.loading = false;
        thisState.status = Status.COMLETED;
      }
    );
    builder.addCase(fetchBooks.pending, (state) => {
      const thisState = state;
      thisState.loading = true;
      thisState.status = Status.LOADING;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      const thisState = state;
      thisState.loading = false;
      thisState.status = Status.ERROR;
    });
  },
});

export const { getBooks } = bookSlice.actions;

export const bookReducer = bookSlice.reducer;
