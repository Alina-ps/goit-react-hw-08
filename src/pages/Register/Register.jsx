import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './Register.module.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const initialValues = {
    name: '',
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
            Username
            <Field
              className={s.input}
              type="text"
              name="username"
              placeholder="Enter your name"
            />
            <ErrorMessage
              name="username"
              component="span"
              className={s.error}
            />
          </label>
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
            Register
          </button>
          <p className={s.text}>
            You already have account?
            <Link to="/login" className={s.span}>
              Log in
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
