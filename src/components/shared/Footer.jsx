import logo from "../imgNavbarFooter/Logotipo-rollinggames.png"

const Footer = () => {
  return (
    <footer className="colorNavbar d-flex justify-content-around">
      <section>
        <img src={logo} alt="Logo de RollingGames" className="logoFooter"/>
      </section>
      <section>
        <h4>Rolling Games</h4>
        <ul>
          <li><a href="">Tienda</a></li>
          <li><a href="">Favoritos</a></li>
          <li><a href="">Contacto</a></li>
          <li><a href="">Sobre nosotros</a></li>
          
        </ul>
      </section>
      <section>
        <h5>Categoria de juegos</h5>
        <ul>
          <li><a href="">Accion</a></li>
          <li><a href="">Aventura</a></li>
          <li><a href="">Estrategia</a></li>
          <li><a href="">Ver todos los juegos</a></li>
        </ul>
      </section>
      <section>
        <h5>Mas sobre nosotros</h5>
          <ul class="m-0 list-unstyled text-light">
            <li class="mb-1">Teléfono: +543815887741</li>
            <li class="mb-1">Mail: Rollingshoes@gmail.com</li>
            <li class="mb-1">
              Dirección: Gral. José María Paz 576, San Miguel de
              Tucumán, Tucumán
            </li>
            <li class="mb-1">
            Nuestras redes sociales
            </li>
            <div class="text-center footerRedes">
              
            </div>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
