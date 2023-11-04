import {  createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './requestsAPI';

const handlePanding = state => {
  state.isLoading = true;
};

export const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = null;
  state.contacts = action.payload;
};
  
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

export const handleAddContactFulfilled = (state, action) => {
  state.contacts.unshift(action.payload);
  state.isLoading = false;
  state.isError = null;
};
  
  export const handleDeleteContactFulfilled = (state, action) => {
    state.contacts = state.contacts.filter(
      contact => contact.id !== action.payload.id
    );
    state.isLoading = false;
    state.isError = null;
  };
  const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      contacts: [],
      isLoading: false,
      isError: null,
    },
    extraReducers: builder => {
      builder
        .addCase(fetchContacts.pending, handlePanding)
        .addCase(fetchContacts.fulfilled, handleFulfilled)
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePanding)
        .addCase(addContact.fulfilled, handleAddContactFulfilled)
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePanding)
        .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
        .addCase(deleteContact.rejected, handleRejected);
    },
  });
  
  export const newReducers = contactsSlice.reducer;


