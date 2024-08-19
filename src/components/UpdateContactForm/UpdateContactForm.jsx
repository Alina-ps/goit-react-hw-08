import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './UpdateContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import {
  selectEditFormState,
  selectModalContactId,
} from '../../redux/modal/selectors';
import { selectEditing } from '../../redux/contacts/selectors';
import { closeEditForm } from '../../redux/modal/slice';

const UpdateContactForm = () => {
  const dispatch = useDispatch();
  const isEditFormOpen = useSelector(selectEditFormState);
  const contactId = useSelector(selectModalContactId);
  const editedContact = useSelector((state) => selectEditing(state, contactId));

  const initialValues = {
    name: editedContact ? editedContact.name : '',
    number: editedContact ? editedContact.number : '',
  };

  const handleSubmit = (values, actions) => {
    if (editedContact) {
      dispatch(
        editContact({
          id: editedContact.id,
          updatedContact: values,
        })
      );
    }
    actions.resetForm();
    dispatch(closeEditForm());
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

  if (!isEditFormOpen) {
    return null;
  }

  return (
    <div className={s.background}>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className={s.form}>
            <button
              className={s.btnClose}
              type="button"
              onClick={() => dispatch(closeEditForm())}
            >
              X
            </button>
            <label className={s.label}>
              Name
              <Field
                className={`${s.input} ${
                  touched.name && (errors.name ? s.invalid : '')
                }`}
                type="text"
                name="name"
                placeholder="e.g. Peter Parker"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <ErrorMessage name="name" component="span" className={s.error} />
            </label>
            <label className={s.label}>
              Number
              <Field
                className={`${s.input} ${
                  touched.number && (errors.number ? s.invalid : '')
                }`}
                type="text"
                name="number"
                placeholder="e.g. 111-111-1111"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
              />
              <ErrorMessage
                name="number"
                component="span"
                className={s.error}
              />
            </label>
            <div className={s.btnWrapper}>
              <button className={s.btn} type="submit">
                Save
              </button>
              <button
                className={s.btn}
                type="button"
                onClick={() => dispatch(closeEditForm())}
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateContactForm;
