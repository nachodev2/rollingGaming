
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

function App() {
  const juegosLocalStorage = JSON.parse(localStorage.getItem("juegosKey")) || [];
  const [juegos, setJuegos] = useState(juegosLocalStorage);

  useEffect(() => {
    localStorage.setItem("juegosKey", JSON.stringify(juegos));
  }, [juegos]);

  const cargarJuego = (juegoNuevo) => {
    const juegoConIdYPunt = {
      ...juegoNuevo,
      id: uuidv4(),
      puntuacion: +(Math.random() * 4 + 1).toFixed(1),
    };
    setJuegos([...juegos, juegoConIdYPunt]);
    return true;
  };

  const borrarProducto = (idJuego) => {
    const juegosFiltrados = juegos.filter((juego) => juego.id !== idJuego);
    setJuegos(juegosFiltrados);
    return true;
  };

  const buscarJuego = (id) => {
    return juegos.find((juego) => juego.id.toString() === id.toString());
  };

return (
    <>
      <FavoritosProvider>
        <CarritoProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route element={<LayoutConMenuYFooter />}>
                <Route path="/" element={<Inicio />} />
                <Route path="/carro-compras" element={<CarroCompras />} />
                <Route path="/detalle-producto/:id" element={<DetalleProducto buscarJuego={buscarJuego} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route
                  path="/administrador"
                  element={
                    <Administrador
                      cargarJuego={cargarJuego}
                      juegos={juegos}
                      setJuegos={setJuegos}
                      borrarProducto={borrarProducto}
                    />
                  }
                />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/tienda" element={<Tienda juegos={juegos} />} />
                <Route path="/favoritos-vacio" element={<FavoritosVacio />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/fila-card-categorias" element={<FilaCardCategorias />} />
                <Route
                  path="/formulario-producto"
                  element={<FormularioProducto cargarJuego={cargarJuego} />}
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
