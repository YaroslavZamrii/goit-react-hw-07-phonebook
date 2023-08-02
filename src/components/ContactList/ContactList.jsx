import { useEffect } from 'react';
import Contact from '../Contact';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contactsOperations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import css from './ContactList.module.css';
import Message from 'components/Message/Message';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const toastConfig = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      {visibleContacts.length !== 0 && (
        <ul>
          {visibleContacts.map(({ id, name, phone }) => {
            return (
              <li className={css.item} key={id}>
                <Contact name={name} number={phone} contactId={id} />
              </li>
            );
          })}
        </ul>
      )}
      {isLoading && <Loader />}
      {visibleContacts.length === 0 && (
        <Message text="Contact list is empty." />
      )}
      {error !== null && toast.error(error, toastConfig)}
    </>
  );
}

export default ContactList;
