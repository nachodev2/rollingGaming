import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Card, Container } from 'react-bootstrap';


const ComentariosConRating = ({ comentarios }) => {
  return (
    <Container className="mt-4">
      <h3>Reseñas</h3>
      {comentarios.length === 0 && <p>No hay reseñas aún.</p>}
      {comentarios.map(({ id, usuario, texto, fecha, puntuacion }) => (
        <Card key={id} className="mb-3">
          <Card.Body>
            <Card.Title>{usuario}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{fecha}</Card.Subtitle>
            <Stack spacing={1} direction="row" alignItems="center">
              <Rating
                name={`rating-readonly-${id}`}
                value={puntuacion}
                precision={0.5}
                readOnly
              />
              <span>({puntuacion.toFixed(1)})</span>
            </Stack>
            <Card.Text className="mt-2">{texto}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ComentariosConRating;
