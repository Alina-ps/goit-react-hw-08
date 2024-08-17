// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
// import ContactList from '../ContactList/ContactList';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectError, selectLoading } from '../../redux/selectors';
// import { useEffect } from 'react';
// import { fetchContacts } from '../../redux/contactsOps';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUserThunk } from '../../redux/auth/operations';
import PrivateRoute from '../Routes/PrivateRoute';
import RestrictedRoute from '../Routes/RestrictedRoute';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import Loader from '../Loader/Loader';
import AppBar from '../AppBar/AppBar';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && <h1>Loading...</h1>}
      {error && <h2>Something went wrong. Please try again!</h2>} */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
