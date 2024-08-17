import s from './RegistrationPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div>
      <h2 className={s.title}>Registration</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
