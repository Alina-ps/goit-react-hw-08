import s from './RegistrationPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { Toaster } from 'react-hot-toast';

const RegistrationPage = () => {
  return (
    <div>
      <Toaster />
      <h2 className={s.title}>Registration</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
