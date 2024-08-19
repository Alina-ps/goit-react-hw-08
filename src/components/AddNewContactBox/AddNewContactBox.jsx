import { useDispatch } from 'react-redux';
import s from './AddNewContactBox.module.css';
import { openAddForm } from '../../redux/modal/slice';

const AddNewContactBtn = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(openAddForm());
  };

  return (
    <div className={s.wrapper}>
      <button className={s.btn} type="submit" onClick={handleAdd}>
        + Add Contact
      </button>
    </div>
  );
};

export default AddNewContactBtn;
