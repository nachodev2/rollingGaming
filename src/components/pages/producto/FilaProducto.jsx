import { Row, Col } from "react-bootstrap";
import CardProducto from "./CardProducto";


const FilaProducto = ({ juegos }) => {
  return (
    <div className="px-5">
      <Row xs={1} md={3} lg={4} className="mb-4 g-4">
        {juegos.map((juego) => (
          <Col key={juego.id} className="h-100 d-flex">
            <CardProducto juego={juego} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FilaProducto;
