import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Toaster />
      <Outlet />
    </div>
  );
};

export default Layout;
