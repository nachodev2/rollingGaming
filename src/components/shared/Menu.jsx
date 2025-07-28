import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import "./navFooter.css";
import Login from "../pages/login-registro/Login";
import { useNavigate } from "react-router";
const Menu = ({
  setUsuarioLogeado,
  usuarioLogeado,
  usuarioRegistradoLog,
  setUsuarioRegistradoLog,
}) => {
  const navigate = useNavigate();
  const cerrarSesion = () => {
    setUsuarioLogeado(false);
    sessionStorage.removeItem("usuarioLogeado");
    setUsuarioRegistradoLog(false);
    sessionStorage.removeItem("usuarioRegistradoLog");
    navigate("/");
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="colorNavbar">
        <Container className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Link to="/">
              {" "}
              <img
                src="/logoNavFooter.png"
                alt="Logo de RollingGames"
                className="logoNav"
              />
            </Link>
          </div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="colorToggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex gap-3 me-4">
              <Nav.Link as={Link} to="/" className="textNavFooter">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/tienda" className="textNavFooter">
                Tienda
              </Nav.Link>
              <Nav.Link as={Link} to="/contacto" className="textNavFooter">
                Contacto
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/sobre-nosotros"
                className="textNavFooter"
              >
                Sobre Nosotros
              </Nav.Link>
              {usuarioRegistradoLog ? (
                <>
                  <Nav.Link as={Link} to="/favoritos" className="textNavFooter">
                    Favoritos
                  </Nav.Link>
                     <Button
                  className="textNavFooter textLogin me-4 colorLoginCrear rounded-3 border-2 mb-3 px-4"
                  as={Link}
                  to="/carro-compras"
                  
                >
                  <i className="bi bi-cart4"></i>
                </Button>
                </>
              ) : null}
              {usuarioLogeado ? (
                <>
                  <Nav.Link as={Link} to="/favoritos" className="textNavFooter">
                    Favoritos
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/administrador"
                    className="textNavFooter"
                  >
                    Administrador
                  </Nav.Link>
                </>
              ) : null}
            </Nav>
            <Nav className="ms-auto d-flex flex-row align-items-center margenT">
              {usuarioLogeado || usuarioRegistradoLog ? (
                <Button
                  className="textLogin me-4 colorLoginCrear rounded-3 border-2 mb-3"
                  as={Link}
                  to="/"
                  onClick={cerrarSesion}
                >
                  Cerrar sesión
                </Button>
              ) : (
                <>
                  <Login
                    setUsuarioLogeado={setUsuarioLogeado}
                    setUsuarioRegistradoLog={setUsuarioRegistradoLog}
                    usuarioRegistradoLog={usuarioRegistradoLog}
                  />
                  <Link to="/registro">
                    <Button className="textLogin me-4 colorLoginCrear rounded-3 border-2 mb-3">
                      Crear Cuenta
                    </Button>
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
