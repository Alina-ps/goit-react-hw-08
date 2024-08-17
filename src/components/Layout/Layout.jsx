import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <AppBar />
    </div>
  );
};

export default Layout;
