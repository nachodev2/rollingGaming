import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../imgNavbarFooter/Logotipo-rollinggames.png";
const Menu = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="colorNavbar">
        <div className="d-flex justify-content-center w-25">
          <img src={logo} alt="Logo de RollingGames" className="logoNav" />
          <Navbar.Brand href="#home" className="text-start tituloNav align-self-center">
            Rolling Games
          </Navbar.Brand>
        </div>
        <Container>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" className="textNavFooter">
                Tienda
              </Nav.Link>
              <Nav.Link href="#features" className="textNavFooter">
                Contacto
              </Nav.Link>
              <Nav.Link href="#pricing" className="textNavFooter">
                Sobre nosotros
              </Nav.Link>
                <Nav.Link href="#pricing" className="textNavFooter">
                Categoria de juegos
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className="textNavFooter">
                Iniciar Sesion
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="textNavFooter">
                Crear Cuenta
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
