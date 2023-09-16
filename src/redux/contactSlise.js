import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const contastSlise = createSlice({
   


  name: 'contacts',
  
  initialState,
  reducers: {
    createContact: (state, action) => {
      console.log('action', action)
      console.log('state.contacts', state.contacts);
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});
 console.log('contastSlise', contastSlise);

export const { createContact, deleteContact } = contastSlise.actions;
