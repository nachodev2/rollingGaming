import "./navFooter.css";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="colorNavbar d-flex justify-content-around">
      <section>
        <img
          src="/logoNavFooter.png"
          alt="Logo de RollingGames"
          className="logoFooter"
        />
      </section>
      <section>
        <h4 className="textNavFooter">Rolling Games</h4>
        <ul className="m-0 list-unstyled text-light">
          <li className="mb-3">
            <Link to="/tienda" className="textListFooter">
              Tienda
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/contacto" className="textListFooter">
              Contacto
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/sobre-nosotros" className="textListFooter">
              Sobre nosotros
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h5 className="textNavFooter">Categoria de juegos</h5>
        <ul className="m-0 list-unstyled text-light ">
          <li className="mb-3">
            <Link to="/juegos/accion" className="textListFooter">
              Acción
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/juegos/aventura" className="textListFooter">
              Aventura
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/juegos/estrategia" className="textListFooter">
              Estrategia
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h5 className="textNavFooter">Mas sobre nosotros</h5>
        <ul className="m-0 list-unstyled textListFooter">
          <li className="mb-3">Teléfono: +543815887741</li>
          <li className="mb-3">Mail: Rollingaming@gmail.com</li>
          <li className="mb-3">
            Dirección: Gral. José María Paz 576, San Miguel de Tucumán, Tucumán
          </li>
          <li className="mb-3">Nuestras redes sociales</li>
          <div className="text-center d-flex justify-content-start gap-3">
            <Link to="/error404" className="text-light fs-4">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="/error404" className="text-light fs-4">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="/error404" className="text-light fs-4">
              <i className="bi bi-twitter-x"></i>
            </Link>
          </div>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
