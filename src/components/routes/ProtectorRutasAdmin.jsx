import { Navigate, Outlet } from "react-router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProtectorAdmin = ({ usuarioLogeado }) => {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  useEffect(() => {
    if (!usuarioLogeado) {
      Swal.fire({
        icon: "error",
        title: "Acceso denegado",
        text: "Solo el administrador puede acceder a esta sección.",
      }).then(() => {
        setMostrarAlerta(true);
      });
    }
  }, [usuarioLogeado]);

  if (!usuarioLogeado && mostrarAlerta) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectorAdmin;