import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
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
            You don't have account?
            <Link to="/register" className={s.span}>
              Sign up!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
