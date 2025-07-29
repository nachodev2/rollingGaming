import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Inicio from "./components/pages/inicio/Inicio.jsx";
import CarroCompras from "./components/pages/carro-compras/CarroCompras.jsx";
import DetalleProducto from "./components/pages/producto/DetalleProducto.jsx";
import Login from "./components/pages/login-registro/Login.jsx";
import Registro from "./components/pages/login-registro/Registro.jsx";
import Administrador from "./components/pages/administrador/Administrador.jsx";
import Error404 from "./components/pages/error404/Error404.jsx";
import SobreNosotros from "./components/pages/sobre-nosotros/SobreNosotros.jsx";
import Tienda from "./components/pages/tienda/Tienda.jsx";
import Favoritos from "./components/pages/favoritos/Favoritos.jsx";
import FavoritosVacio from "./components/pages/favoritos/FavoritosVacio.jsx";
import FilaCardCategorias from "./components/pages/inicio/FilaCardCategorias.jsx";
import FormularioProducto from "./components/pages/administrador/FormularioProducto.jsx";
import ScrollToTop from "./components/shared/ScrollToTop.jsx";
import { CarritoProvider } from "./components/pages/carro-compras/CarroComprasContext.jsx";
import { FavoritosProvider } from "./components/pages/favoritos/FavoritosContext.jsx";
import LayoutConMenuYFooter from "./components/layout/LayoutConMenuYFooter.jsx";
import LayoutSinMenuNiFooter from "./components/layout/LayoutSinMenuNiFooter.jsx";
import ProtectorRutasAdmin from "./components/routes/ProtectorRutasAdmin.jsx";
import ProtectoRutas from "./components/routes/ProtectoRutas.jsx";

function App() {
  const juegosLocalStorage =
    JSON.parse(localStorage.getItem("juegosKey")) || [];
  const [juegos, setJuegos] = useState(juegosLocalStorage);

  const usuariosLocalStorage =
    JSON.parse(localStorage.getItem("usuariosKey")) || [];
  const [usuarios, setUsuarios] = useState(usuariosLocalStorage);

  useEffect(() => {
    localStorage.setItem("juegosKey", JSON.stringify(juegos));
    localStorage.setItem("usuariosKey", JSON.stringify(usuarios));
  }, [juegos, usuarios]);

  const cargarJuego = (juegoNuevo) => {
    const juegoConIdYPunt = {
      ...juegoNuevo,
      precio: parseFloat(juegoNuevo.precio),
      id: uuidv4(),
      puntuacion: +(Math.random() * 4 + 1).toFixed(1),
    };
    setJuegos([...juegos, juegoConIdYPunt]);
    return true;
  };

  const editarJuego = (idJuego, juego) => {
    const juegosEditados = juegos.map((itemJuego)=>{
      if(itemJuego.id === Number(idJuego)){
        return {
          ...itemJuego, 
          ...juego
        }
      }
      return itemJuego
    })
    setJuegos(juegosEditados);
    console.log(juegos);
    return true
  }

  const borrarProducto = (idJuego) => {
    const juegosFiltrados = juegos.filter((juego) => juego.id !== idJuego);
    setJuegos(juegosFiltrados);
    return true;
  };

  const borrarUsuario = (idUsuario) => {
    const usuariosFiltrados = usuarios.filter(
      (usuario) => usuario.id !== idUsuario
    );
    setUsuarios(usuariosFiltrados);
    return true;
  };

  const cargarUsuario = (usuarioNuevo) => {
    setUsuarios([...usuarios, usuarioNuevo]);
    usuarioNuevo.id = uuidv4();

    return true;
  };

  const buscarUsuario = (idUsuario) => {
  const usuarioBuscado = usuarios.find((usuarioEditado) => usuarioEditado.id === idUsuario)
  return usuarioBuscado
}

  const usuarioLogeadoStorage =
    JSON.parse(sessionStorage.getItem("usuarioLogeado")) || false;
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuarioLogeadoStorage);

  const usuarioRegistradoLogStorage =
    sessionStorage.getItem("usuarioRegistradoLog") === "true";
  const [usuarioRegistradoLog, setUsuarioRegistradoLog] = useState(
    usuarioRegistradoLogStorage
  );

  const buscarJuego = (id) => {
    return juegos.find((juego) => juego.id.toString() === id.toString());
  };

  return (
    <>
      <FavoritosProvider>
        <CarritoProvider juegosDisponibles={juegos}>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route
                element={
                  <LayoutConMenuYFooter
                    setUsuarioLogeado={setUsuarioLogeado}
                    usuarioLogeado={usuarioLogeado}
                    setUsuarioRegistradoLog={setUsuarioRegistradoLog}
                    usuarioRegistradoLog={usuarioRegistradoLog}
                  />
                }
              >
                <Route path="/" element={<Inicio />} />

                <Route
                  path="/detalle-producto/:id"
                  element={<DetalleProducto buscarJuego={buscarJuego} />}
                />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/registro"
                  element={<Registro cargarUsuario={cargarUsuario} buscarUsuario={buscarUsuario} titulo={"Crear cuenta"}/>}
                />
                <Route
                  path="/editarUsuario/:id"
                  element={<Registro cargarUsuario={cargarUsuario} buscarUsuario={buscarUsuario} titulo={"Editar usuario"}/>}
                />
                <Route
                  element={<ProtectorRutasAdmin usuarioLogeado={usuarioLogeado} />}
                >
                  <Route
                    path="/administrador"
                    element={
                      <Administrador
                        cargarJuego={cargarJuego}
                        juegos={juegos}
                        setJuegos={setJuegos}
                        borrarProducto={borrarProducto}
                        cargarUsuario={cargarUsuario}
                        usuarios={usuarios}
                        setUsuarios={setUsuarios}
                        borrarUsuario={borrarUsuario}
                        buscarUsuario={buscarUsuario}
                      />
                    }
                  />
                  <Route path="formulario-producto" element={<FormularioProducto titulo={"Añadir un juego"} cargarJuego={cargarJuego}></FormularioProducto>}/>
                  <Route path="editar/:id" element={<FormularioProducto titulo={"Editar juego"} buscarJuego={buscarJuego} cargarJuego={cargarJuego} editarJuego={editarJuego}></FormularioProducto>}/>
                </Route>
                <Route
                  element={
                    <ProtectoRutas
                      usuarioRegistradoLog={usuarioRegistradoLog}
                    />
                  }
                >
                  <Route path="/favoritos" element={<Favoritos />} />
                  <Route path="/carro-compras" element={<CarroCompras />} />
                  <Route path="/favoritos-vacio" element={<FavoritosVacio />} />
                </Route>
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/tienda" element={<Tienda juegos={juegos} />} />
                <Route
                  path="/fila-card-categorias"
                  element={<FilaCardCategorias />}
                />
              </Route>
              <Route element={<LayoutSinMenuNiFooter />}>
                <Route path="*" element={<Error404 />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CarritoProvider>
      </FavoritosProvider>
    </>
  );
}

export default App;
