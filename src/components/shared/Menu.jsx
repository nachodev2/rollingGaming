import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../imgNavbarFooter/Logotipo-rollinggames.png";
const Menu = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <div className="d-flex justify-content-center w-25">
        <img src={logo} alt="Logo de RollingGames" className="logoNav"/>
        </div>
        <Container >
          <Navbar.Brand href="#home" className="text-start">
            Rolling Games
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Tienda</Nav.Link>
              <Nav.Link href="#features">Favoritos</Nav.Link>
              <Nav.Link href="#features">Contacto</Nav.Link>
              <Nav.Link href="#pricing">Sobre nosotros</Nav.Link>
              <NavDropdown
                title="Categoria de Juegos"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Accion</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Aventura</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Estrategia
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Mostrar más
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Iniciar Sesion</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
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
