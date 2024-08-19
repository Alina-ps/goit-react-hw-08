import { ErrorMessage, Field, Form, Formik } from 'formik';
import { registerThunk } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from './RegistrationForm.module.css';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(registerThunk(values));
    actions.resetForm();
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .required('This field is required!')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
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
        {({ errors, handleChange, handleBlur, values }) => (
          <Form className={s.form}>
            <label className={s.label}>
              Name
              <Field
                className={`${s.input} ${
                  values.name && (errors.name ? s.invalid : '')
                }`}
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <ErrorMessage name="name" component="span" className={s.error} />
            </label>
            <label className={s.label}>
              Email
              <Field
                className={`${s.input} ${
                  values.email && (errors.email ? s.invalid : '')
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
                  values.password && (errors.password ? s.invalid : '')
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
              Register
            </button>
            <p className={s.text}>
              You already have an account?
              <Link to="/login" className={s.span}>
                Log in
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
