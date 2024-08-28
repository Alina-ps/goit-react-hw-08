import { useDispatch } from 'react-redux';
import s from './AddNewContactBox.module.css';
import { openAddForm } from '../../redux/modal/slice';
import { FaUserPlus } from 'react-icons/fa';

const AddNewContactBtn = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(openAddForm());
  };

  return (
    <div className={s.wrapper}>
      <button className={s.btn} type="submit" onClick={handleAdd}>
        <div className={s.svg}>
          <FaUserPlus />
        </div>
        <p className={s.textBtn}>Add Contact</p>
      </button>
    </div>
  );
};

export default AddNewContactBtn;
