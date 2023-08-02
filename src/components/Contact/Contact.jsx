import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { AiOutlineUser } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contactsOperations';

function Contact({ name, number, contactId }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactThunk(contactId));
    console.log('contactId:', contactId);
  };

  return (
    <>
      <div className={css.wrapper}>
        <span className={css.icon}>
          <AiOutlineUser />
        </span>
        <p>{name}</p>
      </div>
      <div className={css.wrapper}>
        <p className={css.number}>{number}</p>
        <button className={css.button} type="button" onClick={handleDelete}>
          <RiDeleteBinLine />
        </button>
      </div>
    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
