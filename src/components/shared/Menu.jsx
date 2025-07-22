import { Button, Container, Nav, Navbar, } from "react-bootstrap";
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
              <Button href="#deets" className="textLogin me-4 colorLoginCrear rounded-3 border-2" >
                Iniciar Sesion
              </Button>
              <Button eventKey={2} href="#memes" className="textLogin me-4 colorLoginCrear rounded-3 border-2">
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
