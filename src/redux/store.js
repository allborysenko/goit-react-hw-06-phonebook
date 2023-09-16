import { configureStore } from '@reduxjs/toolkit';
import { contastSlise } from './contactSlise';
import { filterSlise } from './filterSlice';


export const store = configureStore({
  reducer: {
    contacts: contastSlise.reducer,
    filter: filterSlise.reducer,
  },
});
