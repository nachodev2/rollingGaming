import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "./detalleProducto.css"
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const DetalleProducto = ({ buscarJuego }) => {

  const { id } = useParams();
  const [juegoBuscado, setJuegoBuscado] = useState({});

  useEffect(() => {
    const juego = buscarJuego(id);
    setJuegoBuscado(juego);
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col sm={8} className="mt-5">
            <section>
              <h2>{juegoBuscado.nombreJuego}</h2>
              <img
                src={juegoBuscado.imagen}
                alt={juegoBuscado.nombreJuego}
                className="detalleImg"
              />
            </section>
          </Col>
          <Col sm={4} className="mt-5">
            <Card className="detalleJuego ">
              <Card.Body>
                <Card.Title className="taxtosCard">Descripción</Card.Title>
                <Card.Text className="taxtosCard">{juegoBuscado.descripcion}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush ">
                <ListGroup.Item>{juegoBuscado.desarrollador}</ListGroup.Item>
                <ListGroup.Item>{juegoBuscado.precio}</ListGroup.Item>
              </ListGroup>
              <Card.Footer className="d-flex justify-content-star gap-3" >
                <ListGroup.Item>{juegoBuscado.categoria}</ListGroup.Item>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5" xs={12} lg={8}>
            <table className="tablaEstilizada ">
              <thead>
                <tr>
                  <th className="fs-5">Componente</th>
                  <th className="fs-5">Requisitos del juego</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tablaCeldas">Procesador</td>
                  <td className="tablaCeldas">{juegoBuscado.microprocesador}</td>
                </tr>
                <tr>
                  <td className="tablaCeldas">Memoria RAM</td>
                  <td className="tablaCeldas">{juegoBuscado.memoriaRam}</td>
                </tr>
                <tr>
                  <td className="tablaCeldas">Tarjeta Gráfica</td>
                  <td className="tablaCeldas">{juegoBuscado.grafica}</td>
                </tr>
                <tr>
                  <td className="tablaCeldas">Almacenamiento</td>
                  <td className="tablaCeldas">{juegoBuscado.almacenamiento}</td>
                </tr>
                <tr>
                  <td className="tablaCeldas">Sistema Operativo</td>
                  <td className="tablaCeldas">{juegoBuscado.sistemaOperativo}</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col className="mt-5" xs={12} lg={4}>
            <h4 className="fs-3 mb-5">Reseñas</h4>
            <p className="mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              quasi itaque suscipit ipsum. Mollitia nesciunt omnis architecto
              deserunt accusantium deleniti alias quo quae, iusto numquam, qui
              voluptates labore ducimus voluptas?
            </p>
            <p className="mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              ipsum odio eum quia, eaque error. Qui explicabo illo repudiandae
              alias.
            </p>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetalleProducto;
