import { Outlet } from 'react-router';

const LayoutSinMenuNiFooter = () => {
  return (
    <main className="h-100">
      <Outlet />
    </main>
  );
};

export default LayoutSinMenuNiFooter;
