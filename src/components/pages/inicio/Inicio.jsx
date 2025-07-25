import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import CarouselPublicidadJuegos from './Carousel';
import Garantias from './Garantias';
import GridSection from './GridSection';

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
      <section>
        <GridSection>
        </GridSection>
      </section>
    </>
  )
}

export default Inicio
