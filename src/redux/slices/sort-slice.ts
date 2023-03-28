import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort: (state) => {
      const thisState = state;
      thisState.value = !thisState.value;
    },
  },
});

export const { setSort } = sortSlice.actions;

export const sortReducer = sortSlice.reducer;
