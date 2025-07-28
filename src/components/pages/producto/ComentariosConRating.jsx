import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Card, Container } from 'react-bootstrap';

const ComentariosConRating = ({ comentarios }) => {
    const comentariosValidos = comentarios.filter(com => typeof com.puntuacion === 'number');

    const promedio =
        comentariosValidos.length > 0
            ? comentariosValidos.reduce((sum, c) => sum + c.puntuacion, 0) / comentariosValidos.length
            : 0;

    return (
        <Container className='mb-4'>
            <h3 className='mb-3'>Reseñas
                {comentariosValidos.length > 0 && (
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <span className='mt-3 ms-3 text-white fs-5'>({promedio.toFixed(1)})</span>
                        <Rating
                            name="average-rating"
                            value={promedio}
                            precision={0.5}
                            readOnly
                            className='mt-3'
                        />
                    </Stack>
                )}
            </h3>

            {comentariosValidos.length === 0 && <p>No hay reseñas aún.</p>}

            {comentariosValidos.map(({ id, usuario, texto, fecha, puntuacion }) => (
                <Card key={id} className="border-1">
                    <Card.Body>
                        <Card.Title>{usuario}</Card.Title>
                        <Card.Subtitle className="my-2 text-muted">{fecha}</Card.Subtitle>
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
