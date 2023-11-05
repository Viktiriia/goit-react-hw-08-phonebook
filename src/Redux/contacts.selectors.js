import { createSelector } from '@reduxjs/toolkit';

const selectContactsSlice = state => state.contacts;

export const selectContacts = createSelector(
  selectContactsSlice,
  contactsSlice => contactsSlice.contacts
);

export const selectContactsIsLoading = createSelector(
  selectContactsSlice,
  contactsSlice => contactsSlice.isLoading
);

export const selectContactsError = createSelector(
  selectContactsSlice,
  contactsSlice => contactsSlice.error
);

export const selectContactsFilterTerm = createSelector(
  selectContactsSlice,
  contactsSlice => contactsSlice.filterTerm
);