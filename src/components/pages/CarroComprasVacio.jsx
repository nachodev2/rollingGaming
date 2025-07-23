import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function CarroComprasVacio () {
  return (
    <Container className="text-center my-5">
        <Row>
            <Col>
                <img src="/empty_cart.png" alt="Carro de Compras Vacío" id='cart-svg' className='mb-4 cart-svg' />
                <h1 className="mb-4">Tu carro de compras está vacío!</h1>
                <p>¡Agrega productos! O iniciá sesión para comprobar si hay algo.</p>
                <Button variant="primary" href="/" className='me-5'>Ir a la tienda</Button>
                <Button variant="primary" href="/">Iniciar Sesión</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default CarroComprasVacio
