import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "./detalleProducto.css"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ComentariosConRating from "./ComentariosConRating";
import comentariosDeEjemplo from "../../../data/comentariosDeEjemplo";

const getTwoRandomComentarios = (comentarios) => {
  const shuffled = [...comentarios].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
};

const DetalleProducto = ({ buscarJuego }) => {
  const { id } = useParams();
  const [juegoBuscado, setJuegoBuscado] = useState({});
  const [comentariosFiltrados, setComentariosFiltrados] = useState([]);

  useEffect(() => {
    const juego = buscarJuego(id);
    setJuegoBuscado(juego);
    setComentariosFiltrados(getTwoRandomComentarios(comentariosDeEjemplo));
  }, [id, buscarJuego]);

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
            <Card className="detalleJuego border-1">
              <Card.Body>
                <Card.Title className="taxtosCard">Descripción</Card.Title>
                <Card.Text className="taxtosCard">{juegoBuscado.descripcion}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush ">
                <ListGroup.Item><span className="fw-bold me-1">Desarrollado por: </span> {juegoBuscado.desarrollador}</ListGroup.Item>
                <ListGroup.Item> <span className="fw-bold me-1">Precio: </span>  ${juegoBuscado.precio}</ListGroup.Item>
              </ListGroup>
              <Card.Footer className="d-flex justify-content-star gap-3" >
                <ListGroup.Item><span className="fw-bold me-1">Categoría: </span> {juegoBuscado.categoria}</ListGroup.Item>
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
            <ComentariosConRating comentarios={comentariosFiltrados}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetalleProducto;
