import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import CarouselPublicidadJuegos from './Carousel';
import Garantias from './Garantias';

const Inicio = () => {
  return (
    <>
      <section>
        <CarouselPublicidadJuegos>
        </CarouselPublicidadJuegos>
      </section>
      <section>
        <Garantias>
        </Garantias>
      </section>
    </>
  )
}

export default Inicio
