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

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <AddNewContactBtn />
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && <h1>Loading...</h1>}
      {error && <h2>Something went wrong. Please try again!</h2>}
      <UpdateContactForm />
      <ConfirmationModal />
    </div>
  );
};

export default ContactsPage;
