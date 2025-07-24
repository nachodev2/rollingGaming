
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap'; // Asegúrate de importar Button

// Importa tu archivo CSS personalizado
import './inicio.css'; // Crea este archivo CSS en la misma carpeta

function CarouselFadeExample() {
  return (
    <div className="main-carousel-wrapper"> {/* Nuevo contenedor para el carrusel */}
      <Carousel fade interval={null} className="custom-carousel"> {/* 'interval={null}' para detener el auto-slide si lo deseas */}
        {/* Primer Carousel Item */}
        <Carousel.Item className="carousel-item-custom">
          {/* La imagen como fondo */}
          <img
            className="d-block w-100 carousel-background-image"
            src="/zlatan-fc-26.webp" // Asegúrate de que esta ruta sea correcta
            alt="EA SPORTS FC 26 Ultimate Edition"
          />
          {/* Contenido superpuesto */}
          <div className="carousel-content-overlay">
            <h1 className="carousel-title">EA SPORTS FC™ 26 Ultimate Edition</h1>
            <Button variant="success" className="carousel-button">RESERVAR </Button>
          </div>
        </Carousel.Item>

        {/* Segundo Carousel Item (ejemplo) */}
        <Carousel.Item className="carousel-item-custom">
          <img
            className="d-block w-100 carousel-background-image"
            src="ruta-a-tu-segunda-imagen.webp" // ¡CAMBIA ESTA RUTA A TU IMAGEN REAL!
            alt="Second slide"
          />
          <div className="carousel-content-overlay">
            <h1 className="carousel-title">Otro Título de Juego Épico</h1>
            <Button variant="primary" className="carousel-button">EXPLORAR</Button>
          </div>
        </Carousel.Item>

        {/* Tercer Carousel Item (ejemplo) */}
        <Carousel.Item className="carousel-item-custom">
          <img
            className="d-block w-100 carousel-background-image"
            src="ruta-a-tu-tercera-imagen.webp" // ¡CAMBIA ESTA RUTA A TU IMAGEN REAL!
            alt="Third slide"
          />
          <div className="carousel-content-overlay">
            <h1 className="carousel-title">La Mejor Experiencia de Gaming</h1>
            <Button variant="danger" className="carousel-button">MÁS INFORMACIÓN</Button>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;