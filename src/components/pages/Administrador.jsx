import { Table, Container, Card, Row, Col, Button } from "react-bootstrap";
import FilaProductoTabla from "./producto/FilaProductoTabla";
import TablaJuegos from "./TablaJuegos";
import TablaUsuarios from "./TablaUsuarios";

const Administrador = () => {
  return (
    <Container>
      <section className="mt-3 text-center">
        <Row className="justify-content-center">
          <Col xs={4}>
            <Card border="primary">
              <Card.Body>
                <Card.Text>Juegos: <strong className="text-light">11</strong></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card border="primary">
              <Card.Body>
                <Card.Text>Usuarios: <strong className="text-light">11</strong></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card border="primary">
              <Card.Body>
                <Card.Text>Categorias: <strong className="text-light">11</strong></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <TablaJuegos />
      <TablaUsuarios />
      
    </Container>
  );
};

export default Administrador;
