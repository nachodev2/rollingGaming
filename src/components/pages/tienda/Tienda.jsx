
import React, { useContext } from 'react';
import './tienda.css';
import FilaProducto from '../producto/FilaProducto';
import { CarritoContext } from '../carro-compras/CarroComprasContext';


const Tienda = ({ juegos }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  return (
    <div>
      <h1 className="text-center my-4 display-4 titulo-tienda">
        <span className="desde-arriba text-white">Explora Nuestro</span> <br />
        <span className="desde-abajo text-secondary subtitulo-tienda">Catálogo de Juegos</span>
      </h1>
      <p className="text-center text-light desde-izquierda lead w-100">
        Descubre tu próxima aventura
      </p>

      <section className='desde-abajo py-3'>
        <h2 className='text-white text-center mb-5'>Últimas Novedades</h2>
        <FilaProducto juegos={juegos} onAgregar={agregarAlCarrito} />
      </section>

      <section className='py-3 desde-abajo'>
        <h2 className='text-white text-center mb-5'>Más Vendidos</h2>
        <FilaProducto juegos={juegos} onAgregar={agregarAlCarrito} />
      </section>

      <section className='py-3 desde-abajo'>
        <h2 className='text-white text-center mb-3'>Todos los Juegos</h2>
        <p className='text-center text-light mb-5 lead'>Nuestra colección completa te espera</p>
        <FilaProducto juegos={juegos} onAgregar={agregarAlCarrito} />
      </section>
    </div>
  );
};

export default Tienda;