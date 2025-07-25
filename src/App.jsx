import { BrowserRouter, Routes, Route } from 'react-router';
import Inicio from './components/pages/inicio/Inicio.jsx';
import CarroCompras from './components/pages/CarroCompras.jsx';
import CarroComprasVacio from './components/pages/CarroComprasVacio.jsx';
import DetalleProducto from './components/pages/DetalleProducto.jsx';
import Login from './components/pages/Login.jsx';
import Registro from './components/pages/Registro.jsx';
import Administrador from './components/pages/Administrador.jsx';
import Error404 from './components/pages/Error404.jsx';
import Menu from './components/shared/Menu.jsx';
import SobreNosotros from './components/pages/SobreNosotros.jsx';
import Footer from './components/shared/Footer.jsx';
import Tienda from './components/pages/Tienda.jsx';
import FavoritosVacio from './components/pages/favoritos/FavoritosVacio.jsx';
import FilaCardCategorias from './components/pages/inicio/FilaCardCategorias.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <main className='h-100'>
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/carro-compras" element={<CarroCompras />} />
            <Route path="/carro-compras-vacio" element={<CarroComprasVacio />} />
            <Route path="/detalle-producto/:id" element={<DetalleProducto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/administrador" element={<Administrador />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/tienda" element={<Tienda />}></Route>
            <Route path="/favoritos-vacio" element={<FavoritosVacio />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/fila-card-categorias" element={<FilaCardCategorias />} />
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App

