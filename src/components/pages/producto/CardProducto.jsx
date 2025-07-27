import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { FavoritosContext } from "../favoritos/FavoritosContext";

const CardProducto = ({ juego }) => {
  const { agregarAFavoritos, quitarDeFavoritos, favoritos } =
    useContext(FavoritosContext);

  const yaEstaEnFavoritos = favoritos.some((item) => item.id === juego.id);

  return (
    <div className="contenedor-card position-relative">
      <Card className="p-0 rounded-4 overflow-hidden card border-secondary">
        <Card.Img variant="top" src={juego.imagen} />

        <Card.Body>
          <Card.Title className="titulo-card text-light">
            {juego.titulo}
          </Card.Title>

          <div className="d-flex justify-content-between align-items-center mb-2">
            <Card.Text className="mb-0">
              <i className="bi bi-star-fill me-1 text-secondary"></i>
              <i className="bi bi-star-fill me-1 text-secondary"></i>
              <i className="bi bi-star-fill me-1 text-secondary"></i>
              <i className="bi bi-star-fill me-1 text-secondary"></i>
              <i className="bi bi-star-fill me-1 text-secondary"></i>
            </Card.Text>

            <Button
              variant="link"
              className="text-danger p-0"
              onClick={() =>
                yaEstaEnFavoritos
                  ? quitarDeFavoritos(juego.id)
                  : agregarAFavoritos(juego)
              }
              title={
                yaEstaEnFavoritos
                  ? "Quitar de favoritos"
                  : "Agregar a favoritos"
              }
              style={{ fontSize: "1.4rem" }}
            >
              <i
                className={`bi ${
                  yaEstaEnFavoritos ? "bi-heart-fill" : "bi-heart"
                } fs-4`}
              ></i>
            </Button>
          </div>

          <Card.Text>{juego.descripcion}</Card.Text>

          <Card.Text className="text-secondary fw-bold fs-4">
            ${juego.precio}
          </Card.Text>

          <div className="d-flex justify-content-center">
            <Button className="rounded-5 fw-bold py-2 btn-card">
              Comprar <i className="bi bi-cart3 ms-2"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProducto;
