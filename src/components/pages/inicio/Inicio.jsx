import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import CarouselPublicidadJuegos from './Carousel';
import Garantias from './Garantias';
import GridSection from './GridSection';
import CardCategorias from './FilaCardCategorias';

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
      <section>
        <CardCategorias>
        </CardCategorias>
      </section>
    </>
  )
}

export default Inicio
