import { Navigate, Outlet } from "react-router";
import { useEffect, useState } from "react";
import Swal  from "sweetalert2";    

const ProtectoRutas = ({ usuarioLogeado, usuarioRegistradoLog }) => {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
useEffect(() => {
    if (!usuarioLogeado && !usuarioRegistradoLog) {
      Swal.fire({
        icon: "error",
        title: "Algo salió mal...",
        text: "Debes iniciar sesión para acceder a esta página.",
      }).then(() => {
        setMostrarAlerta(true);
      });
    }
  }, [usuarioLogeado, usuarioRegistradoLog]);

  if (!usuarioLogeado && !usuarioRegistradoLog && mostrarAlerta) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
export default ProtectoRutas;
