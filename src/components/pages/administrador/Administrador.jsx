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
}) => {
  const [mostrarTablaJuegos, setMostrarTablaJuegos] = useState(true);

  const handleToggleChange = () => {
    setMostrarTablaJuegos(!mostrarTablaJuegos);
  };

  // setUsuarios([{
  //   id: 11, // Added ID
  //   usuario: "AlessandraBL", // Username derived from name
  //   nombre: "Alessandra Borges Licciardi",
  //   fechaNacimiento: {
  //     año: 1992,
  //     mes: 3, // March
  //     dia: 10,
  //   },
  //   correoElectronico: "alessandra.bl@example.com",
  //   contrasena: "AlesPwd!123",
  //   repetirContrasena: "AlesPwd!123",
  // }])

  return (
    <Container>
      <section className="mt-3 text-center">
        <Row className="justify-content-center">
          <Col xs={6} lg={4} className="mb-3">
            <Card border="primary">
              <Card.Body>
                <Card.Text>
                  Juegos: <strong className="text-light">11</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} lg={4} className="mb-3">
            <Card border="primary">
              <Card.Body>
                <Card.Text>
                  Usuarios: <strong className="text-light">11</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} lg={4} className="mb-3">
            <Card border="primary">
              <Card.Body>
                <Card.Text>
                  Categorias: <strong className="text-light">11</strong>
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

        
        />
      )}
    </Container>
  );
};

export default Administrador;
