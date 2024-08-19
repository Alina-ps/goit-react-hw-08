import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { loginThunk } from '../../redux/auth/operations';
import { Link, Navigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
import * as Yup from 'yup';

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

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('This field is required!'),
    password: Yup.string()
      .required('This field is required!')
      .min(7, 'No less than 7 digits'),
  });

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className={s.form}>
            <label className={s.label}>
              Email
              <Field
                className={`${s.input} ${
                  touched.email && (errors.email ? s.invalid : '')
                }`}
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage name="email" component="span" className={s.error} />
            </label>
            <label className={s.label}>
              Password
              <Field
                className={`${s.input} ${
                  touched.password && (errors.password ? s.invalid : '')
                }`}
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
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
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
