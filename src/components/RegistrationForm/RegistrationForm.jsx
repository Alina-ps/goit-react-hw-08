import { ErrorMessage, Field, Form, Formik } from 'formik';
import { registerThunk } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from './RegistrationForm.module.css';
import * as Yup from 'yup';
import { MdArrowBack } from 'react-icons/md';

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
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className={s.form}>
            <div className={s.inputBox}>
              <Field
                className={`${s.input} ${
                  touched.name && (errors.name ? s.invalid : '')
                }`}
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <label className={s.label} htmlFor="name">
                Name
              </label>
              <ErrorMessage name="name" component="span" className={s.error} />
            </div>

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
              Register
            </button>
            <div className={s.textContainer}>
              <p className={s.text}>You already have an account?</p>
              <Link to="/login" className={s.span}>
                Log in
              </Link>
            </div>

            <Link to="/" className={s.homeLink}>
              <div className={s.svg}>
                <MdArrowBack />
              </div>
              <p className={s.linkText}>to home page</p>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
