import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      state = state.filter(contact => contact.id !== action.payload);
      return state;
    },
  },
});

export const { createContact, deleteContact } = contactSlice.actions;
