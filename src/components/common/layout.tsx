import { Outlet } from 'react-router-dom';
import { Nav } from 'src/components/common';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
