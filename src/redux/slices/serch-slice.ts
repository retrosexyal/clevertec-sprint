import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

export const serchSlice = createSlice({
  name: 'serch',
  initialState,
  reducers: {
    setSerch: (state, action) => {
      const thisState = state;
      thisState.searchValue = action.payload;
    },
  },
});

export const { setSerch } = serchSlice.actions;

export const serchReducer = serchSlice.reducer;
