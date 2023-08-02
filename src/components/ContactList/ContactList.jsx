import { useEffect } from 'react';
import Contact from '../Contact';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contactsOperations';
import { selectVisibleContacts } from 'redux/selectors';
import css from './ContactList.module.css';
import Message from 'components/Message/Message';

function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
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
      {visibleContacts.length === 0 && (
        <Message text="Contact list is empty." />
      )}
    </>
  );
}

export default ContactList;
