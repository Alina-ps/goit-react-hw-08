import s from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <h2 className={s.title}>Login</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
