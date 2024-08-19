import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';
import s from './UserMenu.module.css';

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
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
