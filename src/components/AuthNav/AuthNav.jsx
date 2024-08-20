import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import clsx from 'clsx';

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <nav className={s.nav}>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
    </nav>
  );
};

export default AuthNav;
