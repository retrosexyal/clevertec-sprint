import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

export const bookThemeSlice = createSlice({
  name: 'bookTheme',
  initialState,
  reducers: {
    setBookTheme: (state) => {
      const thisState = state;
      thisState.value = !thisState.value;
    },
  },
});

export const { setBookTheme } = bookThemeSlice.actions;

export const bookThemeReducer = bookThemeSlice.reducer;
