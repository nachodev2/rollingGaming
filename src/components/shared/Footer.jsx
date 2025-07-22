import logo from "../imgNavbarFooter/Logotipo-rollinggames.png"

const Footer = () => {
  return (
    <footer className="colorNavbar d-flex justify-content-around">
      <section>
        <img src={logo} alt="Logo de RollingGames" className="logoFooter"/>
      </section>
      <section>
        <h4 className="textNavFooter">Rolling Games</h4>
        <ul className="m-0 list-unstyled text-light">  
          <li><a href="" className="textListFooter">Tienda</a></li>
          <li><a href="" className="textListFooter">Favoritos</a></li>
          <li><a href="" className="textListFooter">Contacto</a></li>
          <li><a href="" className="textListFooter">Sobre nosotros</a></li>
          
        </ul>
      </section>
      <section>
        <h5 className="textNavFooter">Categoria de juegos</h5>
        <ul className="m-0 list-unstyled text-light ">
          <li><a href="" className="textListFooter">Accion</a></li>
          <li><a href="" className="textListFooter">Aventura</a></li>
          <li><a href="" className="textListFooter">Estrategia</a></li>
          <li><a href="" className="textListFooter">Ver todos los juegos</a></li>
        </ul>
      </section>
      <section>
        <h5 className="textNavFooter">Mas sobre nosotros</h5>
          <ul class="m-0 list-unstyled text-light">
            <li class="" className="textListFooter mb-1">Teléfono: +543815887741</li>
            <li class="mb-1" className="textListFooter mb-1">Mail: Rollingshoes@gmail.com</li>
            <li class="mb-1" className="textListFooter mb-1">
              Dirección: Gral. José María Paz 576, San Miguel de
              Tucumán, Tucumán
            </li>
            <li class="mb-1" className="textListFooter mb-1">
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
