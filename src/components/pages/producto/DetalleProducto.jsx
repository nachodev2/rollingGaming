import { Container, Row, Col, Card, ListGroup, Form, Button } from "react-bootstrap";
import "./detalleProducto.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import comentariosDeEjemplo from "../../../data/comentariosDeEjemplo";

const getTwoRandomComentarios = (comentarios) => {
  const shuffled = [...comentarios].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
};

const DetalleProducto = ({ buscarJuego }) => {
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [puntuacion, setPuntuacion] = useState(0);
  const [comentarios, setComentarios] = useState(comentariosDeEjemplo);
  const { id } = useParams();
  const [juegoBuscado, setJuegoBuscado] = useState({});
  const [comentariosFiltrados, setComentariosFiltrados] = useState([]);

useEffect(() => {
    const juego = buscarJuego(id);
    setJuegoBuscado(juego);
    setComentariosFiltrados(getTwoRandomComentarios(comentarios));
  }, [id, buscarJuego, comentarios]);

  // Manejar el cambio de estrellas
  const handleStarClick = (valor) => {
    setPuntuacion(valor);
  };

  // Manejar el envío de la reseña
  const handleSubmitResena = (e) => {
    e.preventDefault();
    if (nuevoComentario.trim() && puntuacion > 0) {
      const nuevaResena = {
        id: comentarios.length + 1,
        usuario: "Usuario invitado", 
        texto: nuevoComentario,
        fecha: new Date().toISOString().slice(0, 10),
        puntuacion: puntuacion,
      };
      setComentarios([nuevaResena, ...comentarios]);
      setNuevoComentario("");
      setPuntuacion(0);
    }
  };

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
                <Card.Text className="taxtosCard">
                  {juegoBuscado.descripcion}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush ">
                <ListGroup.Item>
                  <span className="fw-bold me-1">Desarrollado por: </span>{" "}
                  {juegoBuscado.desarrollador}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <span className="fw-bold me-1">Precio: </span> $
                  {juegoBuscado.precio}
                </ListGroup.Item>
              </ListGroup>
              <Card.Footer className="d-flex justify-content-star gap-3">
                <ListGroup.Item>
                  <span className="fw-bold me-1">Categoría: </span>{" "}
                  {juegoBuscado.categoria}
                </ListGroup.Item>
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
                  <td className="tablaCeldas">
                    {juegoBuscado.microprocesador}
                  </td>
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
                  <td className="tablaCeldas">
                    {juegoBuscado.sistemaOperativo}
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col className="mt-5" xs={12} lg={4}>
            <Card className="mt-4 border-1">
              <Card.Body>
                <Card.Title>Deja tu reseña</Card.Title>
                <Form onSubmit={handleSubmitResena}>
                  <Form.Group className="mb-2">
                    <Form.Label>Comentario</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      value={nuevoComentario}
                      onChange={e => setNuevoComentario(e.target.value)}
                      placeholder="Escribe tu reseña..."
                      minLength={1}
                      maxLength={200}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Puntuación</Form.Label>
                    <div>
                      {[1,2,3,4,5].map(num => (
                        <span
                          key={num}
                          style={{color: num <= puntuacion ? "gold" : "#ccc"}}
                          onClick={() => handleStarClick(num)}
                        >
                          <i className="bi bi-star-fill fs-4 me-1"></i>
                        </span>
                      ))}
                    </div>
                  </Form.Group>
                  <Button type="submit" variant="primary" disabled={nuevoComentario.trim().length < 5 || puntuacion === 0}>
                    Enviar reseña
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <Card className="mt-4 border-1">
              <Card.Body>
                <Card.Title>Reseñas recientes</Card.Title>
                <ul className="list-unstyled">
                  {comentarios.slice(0, 3).map(com => (
                    <li key={com.id} className="mb-3">
                      <div className="fw-bold">{com.usuario} <span className="text-muted">({com.fecha})</span></div>
                      <div>
                        {[1,2,3,4,5].map(num => (
                          <i key={num} className={num <= com.puntuacion ? "bi bi-star-fill text-secondary me-1" : "bi bi-star text-secondary me-1"}></i>
                        ))}
                      </div>
                      <div>{com.texto}</div>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetalleProducto;
