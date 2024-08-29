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
    number: Yup.string().required('This field is required!'),
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
            <div className={s.inputBox}>
              <Field
                className={`${s.input} ${
                  touched.name && (errors.name ? s.invalid : '')
                }`}
                id="name"
                type="text"
                name="name"
                placeholder="e.g. Peter Parker"
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
                  touched.number && (errors.number ? s.invalid : '')
                }`}
                id="number"
                type="text"
                name="number"
                placeholder="e.g. 111-111-1111"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
              />
              <label className={s.label} htmlFor="number">
                Number
              </label>
              <ErrorMessage
                name="number"
                component="span"
                className={s.error}
              />
            </div>
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
