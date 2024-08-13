import { useDispatch } from 'react-redux';
import s from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.contactWrapper}>
        <p className={s.contactText}>{name}</p>
        <p className={s.contactText}>{number}</p>
      </div>
      <button
        className={s.contactBtn}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
