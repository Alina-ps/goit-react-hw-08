import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { loginThunk } from '../../redux/auth/operations';
import { Link, Navigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            Email
            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            Password
            <Field
              className={s.input}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className={s.error}
            />
          </label>

          <button className={s.btn} type="submit">
            Login
          </button>
          <p className={s.text}>
            You do not have an account?
            <Link to="/register" className={s.span}>
              Sign up!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
