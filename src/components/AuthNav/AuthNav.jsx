import { Link } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={s.nav}>
      <Link className={s.link} to="/register">
        Register
      </Link>
      <Link className={s.link} to="/login">
        Log In
      </Link>
    </nav>
  );
};

export default AuthNav;
