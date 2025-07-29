import { useContext, useState } from "react";
import "./tienda.css";
import FilaProducto from "../producto/FilaProducto";
import { CarritoContext } from "../carro-compras/CarroComprasContext";
import { Container, Form } from "react-bootstrap";

const Tienda = ({ juegos }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const handleInputChange = (e) => {
    // Aquí puedes manejar el cambio del input si es necesario
    setTerminoBusqueda(e.target.value);
  }
  // Filtrar los juegos según el término de búsqueda
  const juegosFiltrados = juegos.filter((juego) => juego.nombreJuego.toLowerCase().includes(terminoBusqueda.toLowerCase()));

  return (
    <div>
      <h1 className="text-center my-4 display-4 titulo-tienda">
        <span className="desde-arriba text-white">Explora Nuestro</span> <br />
        <span className="desde-abajo text-secondary subtitulo-tienda">
          Catálogo de Juegos
        </span>
      </h1>
      <p className="text-center text-light desde-izquierda lead w-100">
        Descubre tu próxima aventura
      </p>

      <section className="desde-abajo py-3">
        <h2 className="text-white text-center mb-5">Últimas Novedades</h2>
        <FilaProducto juegos={juegos} onAgregar={agregarAlCarrito} />
      </section>

      <section className="py-3 desde-abajo">
        <h2 className="text-white text-center mb-3">Todos los Juegos</h2>
        <p className="text-center text-light mb-5 lead">
          Nuestra colección completa te espera
        </p>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="filtroNombreJuego">
              <Form.Control onChange={handleInputChange} value={terminoBusqueda} type="text" placeholder="Ingresa el nombre del juego que estas buscando" minLength={1} maxLength={200}/>
            </Form.Group>
          </Form>
        </Container>
        <FilaProducto juegos={juegosFiltrados} onAgregar={agregarAlCarrito} />
      </section>
    </div>
  );
};

export default Tienda;
