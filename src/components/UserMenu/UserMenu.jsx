import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';
import s from './UserMenu.module.css';
import { IoLogOutOutline } from 'react-icons/io5';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={s.wrapper}>
      <p className={s.text}>{user.name}</p>
      <button className={s.btn} type="submit" onClick={handleLogOut}>
        <div className={s.icon}>
          <IoLogOutOutline />
        </div>
      </button>
    </div>
  );
};

export default UserMenu;
