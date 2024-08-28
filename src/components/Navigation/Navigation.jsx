import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { IoMdContacts } from 'react-icons/io';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <nav className={s.nav}>
      <NavLink className={buildLinkClass} to="/">
        <div className={s.icon}>
          <IoHome />
        </div>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          <div className={s.icon}>
            <IoMdContacts />
          </div>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
