import { Navigate, Outlet } from "react-router";

const ProtectoRutas = ({ usuarioLogeado, usuarioRegistradoLog}) => {
  if (!usuarioLogeado ) {
    return <Navigate to={"/"}></Navigate>;
  } if(!usuarioRegistradoLog){
    return <Navigate to={"/"}></Navigate>;
  }
  return <Outlet></Outlet>;
};

export default ProtectoRutas;
