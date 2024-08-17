import { Link } from 'react-router-dom';
import s from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return isLoggedIn ? (
    <div>
      <h1 className={s.title}>Welcome, {user.name}</h1>
    </div>
  ) : (
    <div>
      <h1 className={s.title}>Welcome to My Contacts App</h1>
      <p className={s.subtitle}>
        This application is designed to help you effortlessly manage and
        organize your contacts in one secure location. Whether you're keeping
        track of friends, family, or professional connections, our app provides
        a simple and intuitive interface for adding, searching, updating and
        storing contact information. Sign up today to start building your
        personalized contact list, and enjoy easy access to all your important
        contacts, anytime, anywhere.
      </p>
      <div className={s.wrapper}>
        <p className={s.text}>Register to start using the app</p>
        <Link to="/register" className={s.btn}>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
