import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';
import s from './UserMenu.module.css';
import { IoLogOutOutline } from 'react-icons/io5';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={s.wrapper}>
      <button className={s.btn} type="submit" onClick={handleLogOut}>
        <div className={s.icon}>
          <IoLogOutOutline />
        </div>
      </button>
    </div>
  );
};

export default UserMenu;
