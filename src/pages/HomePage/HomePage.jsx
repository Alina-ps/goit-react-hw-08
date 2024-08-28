import { Link } from 'react-router-dom';
import s from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return isLoggedIn ? (
    <div className={s.container}>
      <h1 className={s.title}>Welcome, {user.name}</h1>
    </div>
  ) : (
    <div className={s.container}>
      <div className={s.textWrapper}>
        <h1 className={s.title}>Welcome to My Contacts App</h1>
        <p className={s.subtitle}>
          This app helps you easily manage and organize your contacts in one
          secure place. You can effortlessly add, search, update, and store
          contact information. Sign up today to build your personalized contact
          list and access it anytime, anywhere.
        </p>
      </div>
      <div className={s.wrapper}>
        <Link to="/register" className={s.btn}>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
