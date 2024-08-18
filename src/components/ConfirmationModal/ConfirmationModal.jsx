import s from './ConfirmationModal.module.css';

const ConfirmationModal = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Are you sure?</p>
      <p className={s.subtitle}>
        Are you sure you want to delete this contact? This action cannot be
        undone.
      </p>
      <div className={s.btnWrapper}>
        <button className={s.btn}>Confirm</button>
        <button className={s.btn}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
