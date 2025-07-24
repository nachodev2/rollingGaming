import { BrowserRouter, Routes, Route } from 'react-router';
import Inicio from './components/pages/Inicio.jsx';
import CarroCompras from './components/pages/CarroCompras.jsx';
import CarroComprasVacio from './components/pages/CarroComprasVacio.jsx';
import DetalleProducto from './components/pages/DetalleProducto.jsx';
import Login from './components/pages/Login.jsx';
import Registro from './components/pages/Registro.jsx';
import Administrador from './components/pages/Administrador.jsx';
import Error404 from './components/pages/Error404.jsx';
import Menu from './components/shared/Menu.jsx';
import Footer from './components/shared/Footer.jsx';
import Tienda from './components/pages/Tienda.jsx';

function App() {

  return (
    <>
    <Tienda></Tienda>
      <BrowserRouter>
        <Menu></Menu>
        <main className='h-100'>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/carro-compras" element={<CarroCompras />} />
            <Route path="/carro-compras-vacio" element={<CarroComprasVacio />} />
            <Route path="/detalle-producto/:id" element={<DetalleProducto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/administrador" element={<Administrador />} />
            <Route path="/tienda" element={<Tienda />}></Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App

