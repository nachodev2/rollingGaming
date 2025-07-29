import { Container, Card, Row, Col, Form } from "react-bootstrap";
import TablaJuegos from "./TablaJuegos";
import TablaUsuarios from "./TablaUsuarios";
import { useState } from "react";

const Administrador = ({
  cargarJuego,
  juegos,
  setJuegos,
  borrarProducto,
  cargarUsuarios,
  usuarios,
  setUsuarios,
  borrarUsuario
}) => {
  const [mostrarTablaJuegos, setMostrarTablaJuegos] = useState(true);

  const handleToggleChange = () => {
    setMostrarTablaJuegos(!mostrarTablaJuegos);
  };

  return (
    <Container>
      <section className="mt-3 text-center">
        <Row className="justify-content-center">
          <Col xs={6} lg={4} className="mb-3">
            <Card border="primary">
              <Card.Body>
                <Card.Text>
                  Juegos: <strong className="text-light">{juegos ? juegos.length : 0}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} lg={4} className="mb-3">
            <Card border="primary">
              <Card.Body>
                <Card.Text>
                  Usuarios: <strong className="text-light">{usuarios ? usuarios.length : 0}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} lg={4} className="mb-3">
            <Card border="primary">
              <Card.Body>
                <Card.Text>
                  Categorias: <strong className="text-light">6</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <section className="my-2 text-center">
        <Form>
          <Form.Check
            type="switch"
            id="table-toggle-switch"
            label={mostrarTablaJuegos ? "Tabla de Juegos" : "Tabla de Usuarios"}
            checked={mostrarTablaJuegos}
            onChange={handleToggleChange}
            className="d-inline-block"
          />
        </Form>
      </section>

      {mostrarTablaJuegos ? (
        <TablaJuegos
          cargarJuego={cargarJuego}
          juegos={juegos}
          setJuegos={setJuegos}
          borrarProducto={borrarProducto}
        />
      ) : (
        <TablaUsuarios 
      
        setUsuarios={setUsuarios}
        usuarios={usuarios}
        borrarUsuario={borrarUsuario}
        
        />
      )}
    </Container>
  );
};

export default Administrador;
