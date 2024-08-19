import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';
import UpdateContactForm from '../../components/UpdateContactForm/UpdateContactForm';
import AddNewContactBtn from '../../components/AddNewContactBox/AddNewContactBox';
import s from './ContactsPage.module.css';
import Loader from '../../components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.pageWrapper}>
      <div className={s.searchWrapper}>
        <AddNewContactBtn />
        <ContactForm />
        <SearchBox />
        <h2 className={s.title}>Contacts</h2>
      </div>
      <div className={s.contactListContainer}>
        {loading ? <Loader /> : <ContactList />}
      </div>
      {error && <h2>Something went wrong. Please try again!</h2>}
      <UpdateContactForm />
      <ConfirmationModal />
    </div>
  );
};

export default ContactsPage;
