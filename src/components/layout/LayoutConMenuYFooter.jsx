import Menu from '../shared/Menu';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router';

const LayoutConMenuYFooter = () => {
  return (
    <>
      <Menu />
      <main className="h-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutConMenuYFooter;
