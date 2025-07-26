
import { BrowserRouter, Routes, Route } from 'react-router';
import Inicio from './components/pages/inicio/Inicio.jsx';
import CarroCompras from './components/pages/carro-compras/CarroCompras.jsx';
import CarroComprasVacio from './components/pages/carro-compras/CarroComprasVacio.jsx';
import DetalleProducto from './components/pages/producto/DetalleProducto.jsx';
import Login from './components/pages/login-registro/Login.jsx';
import Registro from './components/pages/login-registro/Registro.jsx';
import Administrador from './components/pages/administrador/Administrador.jsx';
import Error404 from './components/pages/error404/Error404.jsx';
import Menu from './components/shared/Menu.jsx';
import SobreNosotros from './components/pages/sobre-nosotros/SobreNosotros.jsx';
import Footer from './components/shared/Footer.jsx';
import Tienda from './components/pages/tienda/Tienda.jsx';
import FavoritosVacio from './components/pages/favoritos/FavoritosVacio.jsx';
import FilaCardCategorias from './components/pages/inicio/FilaCardCategorias.jsx';
import ScrollToTop from './components/shared/ScrollToTop.jsx';
import { useState } from 'react';
import FormularioProducto from './components/pages/administrador/FormularioProducto.jsx';


function App() {

  const [juegos, setJuegos] = useState([])

  const cargarJuegos = (juegoNuevo) => {
    setJuegos([...juegos , juegoNuevo])
    return true
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Menu></Menu>
        <main className="h-100">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/carro-compras" element={<CarroCompras />} />
            <Route
              path="/carro-compras-vacio"
              element={<CarroComprasVacio />}
            />
            <Route path="/detalle-producto" element={<DetalleProducto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/administrador" element={<Administrador cargarJuegos = {cargarJuegos} juegos = {juegos} setJuegos = {setJuegos}/>} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/tienda" element={<Tienda />}></Route>
            <Route path="/favoritos-vacio" element={<FavoritosVacio />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/fila-card-categorias" element={<FilaCardCategorias />} />
            <Route path='/formulario-producto' element={<FormularioProducto/>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
