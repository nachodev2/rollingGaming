import { Row, Col } from "react-bootstrap";
import CardProducto from "./CardProducto"; 



const FilaProducto = ({ juegos, onAgregar, juegosFiltrados }) => {
  // Usar juegosFiltrados si está definido, si no usar juegos
  const listaJuegos = juegosFiltrados !== undefined ? juegosFiltrados : juegos;
  return (
    <div className="px-5">
      {listaJuegos && listaJuegos.length > 0 ? (
        <Row xs={1} md={3} lg={4} className="mb-4 g-4">
          {listaJuegos.map((juego) => (
            <Col key={juego.id} className="h-100 d-flex">
              <CardProducto juego={juego} onAgregar={onAgregar} />
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center text-muted">No hay juegos disponibles en esta sección.</p>
      )}
    </div>
  );
};

export default FilaProducto;
