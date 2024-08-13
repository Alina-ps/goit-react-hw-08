import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Contacts from '../../pages/Contacts/Contacts';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import NotFound from '../../pages/NotFound/NotFound';
import Header from '../Header/Header';

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && <h1>Loading...</h1>}
      {error && <h2>Something went wrong. Please try again!</h2>} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
