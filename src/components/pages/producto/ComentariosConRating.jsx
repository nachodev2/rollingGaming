import { Card, Container, Form, Button } from "react-bootstrap";

const ComentariosConRating = ({ comentarios }) => {
  const comentariosValidos = comentarios.filter(
    (com) => typeof com.puntuacion === "number"
  );

  const promedio =
    comentariosValidos.length > 0
      ? comentariosValidos.reduce((sum, c) => sum + c.puntuacion, 0) /
        comentariosValidos.length
      : 0;

  return (
    <>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Deja tu reseña</Card.Title>
          <Form onSubmit={handleSubmitResena}>
            <Form.Group className="mb-2">
              <Form.Label>Comentario</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={nuevoComentario}
                onChange={(e) => setNuevoComentario(e.target.value)}
                placeholder="Escribe tu reseña..."
                minLength={5}
                maxLength={200}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Puntuación</Form.Label>
              <div>
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    style={{
                      cursor: "pointer",
                      fontSize: "1.5rem",
                      color: num <= puntuacion ? "gold" : "#ccc",
                    }}
                    onClick={() => handleStarClick(num)}
                  >
                    <i className="bi bi-star-fill"></i>
                  </span>
                ))}
              </div>
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              disabled={nuevoComentario.trim().length < 5 || puntuacion === 0}
            >
              Enviar reseña
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Reseñas recientes</Card.Title>
          <ul className="list-unstyled">
            {comentarios.slice(0, 3).map((com) => (
              <li key={com.id} className="mb-3">
                <div className="fw-bold">
                  {com.usuario}{" "}
                  <span className="text-muted">({com.fecha})</span>
                </div>
                <div>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <i
                      key={num}
                      className={
                        num <= com.puntuacion
                          ? "bi bi-star-fill text-warning"
                          : "bi bi-star text-secondary"
                      }
                    ></i>
                  ))}
                </div>
                <div>{com.texto}</div>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default ComentariosConRating;
