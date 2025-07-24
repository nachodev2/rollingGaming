import '../../tienda.css';
<<<<<<< HEAD
import FilaProducto from './producto/FilaProducto';
=======
>>>>>>> 846effa (Creé un archivo tienda.css y lo importé en mi componente Tienda)

const Tienda = () => {
    return (
        <div>
            <h1 className="text-center my-4 display-4 titulo-tienda">
                <span className="desde-arriba text-white">Explora Nuestro</span> <br />
                <span className="desde-abajo text-secondary subtitulo-tienda">Catálogo de Juegos</span>
            </h1>
            <p className="text-center text-light desde-izquierda w-100">Descubre tu próxima aventura</p>
            <section className='h-100'>
                <h3 className='text-white text-center mt-4'>Últimas Novedades</h3>
                <FilaProducto></FilaProducto>
            </section>

        </div>
    )
}

export default Tienda
