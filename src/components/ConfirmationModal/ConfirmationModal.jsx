import { useDispatch, useSelector } from 'react-redux';
import s from './ConfirmationModal.module.css';
import {
  selectModalContactId,
  selectModalState,
} from '../../redux/modal/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { closeModal } from '../../redux/modal/slice';

const ConfirmationModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModalState);
  const contactId = useSelector(selectModalContactId);

  const confirmDelete = () => {
    dispatch(deleteContact(contactId));
    dispatch(closeModal());
  };

  const cancelDelete = () => {
    dispatch(closeModal());
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={s.background}>
      <div className={s.wrapper}>
        <button className={s.btnClose} onClick={cancelDelete}>
          X
        </button>
        <p className={s.title}>Are you sure?</p>
        <p className={s.subtitle}>
          Are you sure you want to delete this contact? This action cannot be
          undone.
        </p>
        <div className={s.btnWrapper}>
          <button className={s.btn} onClick={confirmDelete}>
            Confirm
          </button>
          <button className={s.btn} onClick={cancelDelete}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
