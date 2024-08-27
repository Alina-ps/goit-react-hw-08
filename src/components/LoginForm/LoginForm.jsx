import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
import * as Yup from 'yup';

const LoginForm = () => {
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

  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className={s.form}>
            <div className={s.inputBox}>
              <Field
                className={`${s.input} ${
                  touched.email && (errors.email ? s.invalid : '')
                }`}
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <label className={s.label} htmlFor="email">
                Email
              </label>
              <ErrorMessage name="email" component="span" className={s.error} />
            </div>

            <div className={s.inputBox}>
              <Field
                className={`${s.input} ${
                  touched.password && (errors.password ? s.invalid : '')
                }`}
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <label className={s.label} htmlFor="password">
                Password
              </label>
              <ErrorMessage
                name="password"
                component="span"
                className={s.error}
              />
            </div>

            <button className={s.btn} type="submit">
              Login
            </button>
            <div className={s.textContainer}>
              <p className={s.text}>You do not have an account? </p>
              <Link to="/register" className={s.span}>
                Sign up!
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
