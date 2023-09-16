import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlise = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    createFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { createFilter } = filterSlise.actions;
