import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import "./navFooter.css";
const Menu = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="colorNavbar">
        <Container className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Link to="/">   <img
              src="/logoNavFooter.png"
              alt="Logo de RollingGames"
              className="logoNav"
            /></Link>
         
          </div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="colorToggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex gap-3 me-4">
              <Navbar.Brand href="#home" className="textNavFooter">
                Rolling Games
              </Navbar.Brand>
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
            </Nav>
            <Nav className="ms-auto d-flex flex-row align-items-center margenT">
              <Button
                href="#deets"
                className="textLogin me-4 colorLoginCrear rounded-3 border-2 mb-3"
              >
                Iniciar Sesion
              </Button>
              <Button
                eventKey={2}
                href="#memes"
                className="textLogin me-4 colorLoginCrear rounded-3 border-2 mb-3"
              >
                Crear Cuenta
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
