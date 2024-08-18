import { useDispatch } from 'react-redux';
import s from './Contact.module.css';
import { openModal } from '../../redux/modal/slice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(openModal(id));
  };

  return (
    <>
      <div className={s.contactWrapper}>
        <p className={s.contactText}>{name}</p>
        <p className={s.contactText}>{number}</p>
      </div>
      <button className={s.contactBtn} onClick={handleDelete} type="button">
        Delete
      </button>
    </>
  );
};

export default Contact;
