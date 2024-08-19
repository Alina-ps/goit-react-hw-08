import { useDispatch } from 'react-redux';
import s from './Contact.module.css';
import { openEditForm, openModal } from '../../redux/modal/slice';
import { startEditing } from '../../redux/contacts/slice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(startEditing(id));
    dispatch(openEditForm(id));
  };

  const handleDelete = () => {
    dispatch(openModal(id));
  };

  return (
    <>
      <div className={s.contactWrapper}>
        <p className={s.contactText}>{name}</p>
        <p className={s.contactText}>{number}</p>
      </div>
      <div className={s.btnWrapper}>
        <button className={s.contactBtn} onClick={handleEdit} type="button">
          Edit
        </button>
        <button className={s.contactBtn} onClick={handleDelete} type="button">
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
