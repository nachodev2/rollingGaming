import Carousel from "react-bootstrap/Carousel";
import "./inicio.css";
import { Link } from "react-router";

function CarouselPublicidadJuegos() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="carousel-slide-content">
          <Carousel.Caption className="carousel-caption-left">
          </Carousel.Caption>
          <div className="carousel-image-wrapper">
            <img src="/eafc26.png" alt="" />
            <div className="carousel-caption-left">
              <h2 className="display-5">EA SPORTS FC™ 26 Ultimate Edition</h2>
              <Link to="/Error404">
              <button className="reserve-btn">
                RESERVAR <span>&#8250;</span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel.Item>
       <Carousel.Item>
        <div className="carousel-slide-content">
          <Carousel.Caption className="carousel-caption-left">
          </Carousel.Caption>
          <div className="carousel-image-wrapper">
            <img src="/acshadows.png" alt="" />
            <div className="carousel-caption-left">
              <h2 className="display-5">ASSASSIN'S CREED SHADOWS</h2>
              <Link to="/Error404">
              <button className="reserve-btn-red">
                COMPRAR <span>&#8250;</span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel.Item>
       <Carousel.Item>
        <div className="carousel-slide-content">
          <Carousel.Caption className="carousel-caption-left">
          </Carousel.Caption>
          <div className="carousel-image-wrapper">
            <img src="/codww2.png" alt="" />
            <div className="carousel-caption-left">
              <h2 className="display-5">CALL OF DUTY WWII</h2>
              <Link to="/Error404">
              <button className="reserve-btn-yellow">
                COMPRAR <span>&#8250;</span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPublicidadJuegos;
