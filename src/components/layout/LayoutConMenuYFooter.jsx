import Menu from '../shared/Menu';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router';

const LayoutConMenuYFooter = ({
  setUsuarioLogeado,
  usuarioLogeado,
  setUsuarioRegistradoLog,
  usuarioRegistradoLog
}) => {
  return (
    <>
      <Menu 
         setUsuarioLogeado={setUsuarioLogeado}
        usuarioLogeado={usuarioLogeado}
        setUsuarioRegistradoLog={setUsuarioRegistradoLog}
        usuarioRegistradoLog={usuarioRegistradoLog}/>
      <main className="h-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutConMenuYFooter;
