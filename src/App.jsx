
import { BrowserRouter, Routes, Route } from 'react-router';
import Inicio from './components/pages/inicio/Inicio.jsx';
import CarroCompras from './components/pages/carro-compras/CarroCompras.jsx';
import { CarritoProvider } from './components/pages/carro-compras/CarroComprasContext.jsx';
import DetalleProducto from './components/pages/producto/DetalleProducto.jsx';
import Login from './components/pages/login-registro/Login.jsx';
import Registro from './components/pages/login-registro/Registro.jsx';
import Administrador from './components/pages/administrador/Administrador.jsx';
import Error404 from './components/pages/error404/Error404.jsx';
import SobreNosotros from './components/pages/sobre-nosotros/SobreNosotros.jsx';
import Tienda from './components/pages/tienda/Tienda.jsx';
import FavoritosVacio from './components/pages/favoritos/FavoritosVacio.jsx';
import Favoritos from './components/pages/favoritos/Favoritos.jsx';
import { FavoritosProvider } from './components/pages/favoritos/FavoritosContext.jsx'; 
import FilaCardCategorias from './components/pages/inicio/FilaCardCategorias.jsx';
import ScrollToTop from './components/shared/ScrollToTop.jsx';
import { useEffect, useState } from "react";
import FormularioProducto from './components/pages/administrador/FormularioProducto.jsx';
import { v4 as uuidv4 } from "uuid";
// Layouts
import LayoutConMenuYFooter from './components/layout/LayoutConMenuYFooter.jsx';
import LayoutSinMenuNiFooter from './components/layout/LayoutSinMenuNiFooter.jsx';

function App() {

  const juegosLocalStorage = JSON.parse(localStorage.getItem("juegosKey")) || [];
  const [juegos, setJuegos] = useState(juegosLocalStorage);

  useEffect(() => {
    localStorage.setItem("juegosKey", JSON.stringify(juegos));
  }, [juegos]);

  const cargarJuego = (juegoNuevo) => {
    juegoNuevo.id = uuidv4(); // Genera un ID único para el nuevo juego
    setJuegos([...juegos, juegoNuevo]);
    return true;
  };

  // Función para eliminar un juego
  const borrarProducto = (idJuego) => {
    const juegosFiltrados = juegos.filter((juego) => juego.id !== idJuego);
    setJuegos(juegosFiltrados);
    return true;
  };

  // --- FIN Lógica de juegos ---

  return (
    <>
      <FavoritosProvider>
        <CarritoProvider> {/* Nuevo CarritoProvider, envuelve también las rutas */}
          <BrowserRouter>
            <ScrollToTop />
            {/* Si el Menu necesita el conteo del carrito/favoritos,
                lo obtendrá de los contextos usando useContext() dentro de Menu */}
            <Menu />
            <main className="h-100">
              <Routes>
                <Route path="/" element={<Inicio />} />

                {/* Las rutas de Tienda y CarroCompras YA NO NECESITAN PROPS para el carrito */}
                {/* Ahora obtendrán el carrito y sus funciones directamente del CarritoContext */}
                <Route
                  path="/carro-compras"
                  element={<CarroCompras />} // Ya no pasas props del carrito aquí
                />
                {/* Se mantiene la eliminación de la ruta directa a CarroComprasVacio */}

                <Route path="/detalle-producto" element={<DetalleProducto />} />
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

                {/* La ruta de Tienda solo necesita la lista de 'juegos' (no de carrito) */}
                {/* La función 'agregarAlCarrito' la obtendrá del CarritoContext */}
                <Route
                  path="/tienda"
                  element={
                    <Tienda juegos={juegos} /> // Solo pasas los juegos generales de la tienda
                  }
                />

                <Route path="/favoritos-vacio" element={<FavoritosVacio />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="*" element={<Error404 />} />
                <Route
                  path="/fila-card-categorias"
                  element={<FilaCardCategorias />}
                />
                <Route
                  path="/formulario-producto"
                  element={<FormularioProducto cargarJuego={cargarJuego} />}
                />
              </Routes>
            </main>
            <Footer></Footer>
          </BrowserRouter>
        </CarritoProvider> {/* Cierre de CarritoProvider */}
      </FavoritosProvider> {/* Cierre de FavoritosProvider */}
    </>
  );
}

export default App;
