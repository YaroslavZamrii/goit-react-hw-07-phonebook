import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk, fetchContactsThunk } from './contactsOperations';

const contactsInitialState = {
  item: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    deleteContact: (state, action) => {
      state.item = state.item.filter(contact => contact.id !== action.payload);
    },
    addContact: (state, action) => {
      state.item = [action.payload, ...state.item];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContactsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.item = action.payload;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.item = [action.payload, ...state.item];
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { deleteContact, addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
