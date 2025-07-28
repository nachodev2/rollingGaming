import { Navigate, Outlet } from "react-router";

const ProtectoRutas = ({ usuarioLogeado, usuarioRegistradoLog }) => {
  if (!usuarioLogeado && !usuarioRegistradoLog) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectoRutas;
