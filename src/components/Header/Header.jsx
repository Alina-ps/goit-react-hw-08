import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div className={s.header}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log in
      </NavLink>
    </div>
  );
};

export default Header;
