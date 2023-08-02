import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, fetchContacts } from 'services/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContactsThunk',
  async (_, thunkApi) => {
    try {
      const contactsAll = await fetchContacts();
      return contactsAll; // -> action.payload = postData
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const contact = await addContact(newContact);
      return contact; // -> action.payload = postData
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
