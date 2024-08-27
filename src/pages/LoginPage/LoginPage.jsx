import s from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  return (
    <div className={s.container}>
      <Toaster />
      <h2 className={s.title}>Login</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
