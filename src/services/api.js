import axios from 'axios';

axios.defaults.baseURL = 'https://64ca4523700d50e3c7049c62.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get(`/api/contacts/`);
  return data;
};

export const addContact = async newContact => {
  const { data } = await axios.post('/api/contacts', newContact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/api/contacts/${id}`);
  return data;
};
