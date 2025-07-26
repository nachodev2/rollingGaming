import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import CarouselPublicidadJuegos from './Carousel';
import Garantias from './Garantias';
import GridSection from './GridSection';
import FilaCardCategorias from './FilaCardCategorias';

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
        <FilaCardCategorias>
        </FilaCardCategorias>
      </section>
    </>
  )
}

export default Inicio
