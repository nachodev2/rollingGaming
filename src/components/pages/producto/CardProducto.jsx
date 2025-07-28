import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { FavoritosContext } from "../favoritos/FavoritosContext";
import { Link } from "react-router";

const CardProducto = ({ juego, onAgregar }) => {
  const { agregarAFavoritos, quitarDeFavoritos, favoritos } =
    useContext(FavoritosContext);

  const yaEstaEnFavoritos = favoritos.some((item) => item.id === juego.id);

  return (
    <div className="contenedor-card w-100 h-100">
      <Card className="p-0 rounded-4 overflow-hidden border-secondary h-100 d-flex flex-column">
        <Link
          to={`/detalle-producto/${juego.id}`}
          className="text-decoration-none"
        >
        <Card.Img
          variant="top"
          className="img-card"
          src={juego.imagen}
          alt={juego.nombreJuego}
        />
          <Card.Body className="d-flex flex-column justify-content-between flex-grow-1 h-100">
            <div>
              <Card.Title className="titulo-card text-light text-truncate">
                {juego.nombreJuego}
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
                >
                  <i
                    className={`text-secondary bi ${
                      yaEstaEnFavoritos ? "bi-heart-fill" : "bi-heart"
                    } fs-4`}
                  ></i>
                </Button>
              </div>

              <Card.Text className="descripcion-card">
                {juego.descripcion}
              </Card.Text>
            </div>

            <div className="mt-auto">
              <Card.Text className="text-secondary fw-bold fs-4 mt-2">
                ${juego.precio ? juego.precio.toLocaleString("es-AR") : "N/A"}
              </Card.Text>
            </div>
          </Card.Body>
        </Link>
        <div className="d-grid gap-2 mb-3">
          <Button
            className="btn btn-primary rounded-5 fw-bold py-2 btn-card mx-auto"
            onClick={() => onAgregar(juego)}
          >
            Comprar <i className="bi bi-cart3 ms-2"></i>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CardProducto;
