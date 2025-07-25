import Carousel from 'react-bootstrap/Carousel';
import './inicio.css'

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="carousel-slide-content">
          <Carousel.Caption className="carousel-caption-left">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          <img src="/zlatan-fc-26.webp" alt="" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-slide-content">
          <Carousel.Caption className="carousel-caption-left">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
          <img src="/zlatan-fc-26.webp" alt="" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-slide-content">
          <Carousel.Caption className="carousel-caption-left">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
          <img src="/zlatan-fc-26.webp" alt="" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;