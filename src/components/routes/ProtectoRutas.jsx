import { Navigate, Outlet } from "react-router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProtectorUsuario = ({ usuarioRegistradoLog }) => {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  useEffect(() => {
    if (!usuarioRegistradoLog) {
      Swal.fire({
        icon: "error",
        title: "Acceso restringido",
        text: "Debes estar registrado para acceder.",
      }).then(() => {
        setMostrarAlerta(true);
      });
    }
  }, [usuarioRegistradoLog]);

  if (!usuarioRegistradoLog && mostrarAlerta) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectorUsuario;