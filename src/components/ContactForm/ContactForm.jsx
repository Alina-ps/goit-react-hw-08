import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectAddFormState } from '../../redux/modal/selectors';
import { closeAddForm } from '../../redux/modal/slice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const isAddFormOpen = useSelector(selectAddFormState);

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
    dispatch(closeAddForm());
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .required('This field is required!')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
    number: Yup.string()
      .required('This field is required!')
      .matches(
        /^\d{3}-\d{3}-\d{4}$/,
        'Number must be in the format 111-111-1111'
      ),
  });

  if (!isAddFormOpen) {
    return null;
  }

  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Name
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="e.g. Peter Parker"
            />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            Number
            <Field
              className={s.input}
              type="text"
              name="number"
              placeholder="e.g. 111-111-1111"
            />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>

          <button className={s.btn} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
