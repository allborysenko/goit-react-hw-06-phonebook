import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    createFilter: action => {
      return action.payload;
    },
  },
});

export const { createFilter } = filterSlice.actions;
