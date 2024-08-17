import { Link } from 'react-router-dom';
import s from './Home.module.css';

const Home = () => {
  return (
    <div>
      <h1 className={s.title}>Welcome to My Contacts App</h1>
      <p className={s.subtitle}>Register to access your contacts list -- </p>
      <button className={s.btn} type="submit">
        <Link to="/register" className={s.span}>
          Register
        </Link>
      </button>
    </div>
  );
};

export default Home;
