import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';
import s from './UserMenu.module.css';
import { Navigate } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.wrapper}>
      <p className={s.text}>{user.name}</p>
      <button
        className={s.btn}
        type="submit"
        onClick={() => dispatch(logoutThunk())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
