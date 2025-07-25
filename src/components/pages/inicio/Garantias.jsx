import './inicio.css';

const items = [
  {
    icon: <span role="img" aria-label="gaming" className="garantia-icon"><i className="bi bi-credit-card"></i></span>,
    title: "Pago Seguro",
    text: "Ofrecemos métodos de pago rápidos y seguros para que compres con total confianza."
  },
  {
    icon: <span role="img" aria-label="comunidad" className="garantia-icon"><i className="bi bi-cloud-arrow-down"></i></span>,
    title: "Descargas Instantáneas",
    text: "Accede a tus juegos al instante después de la compra, sin esperas."
  },
  {
    icon: <span role="img" aria-label="innovacion" className="garantia-icon"><i className="bi bi-telephone-inbound"></i></span>,
    title: "Soporte 24/7",
    text: "Nuestro equipo está disponible todo el día para ayudarte ante cualquier consulta o inconveniente."
  }
];

const Garantias = () => (
  <div className="garantias-section">
    <h1 className="garantias-titulo text-center mt-5 mb-5">Nuestras Garantías</h1>
    <div className="contenedor-card d-flex justify-content-center gap-4">
      {items.map((item, idx) => (
        <div className="garantia-card card rounded-4 overflow-hidden border-secondary text-center p-4" key={idx}>
          <div className="mb-3">{item.icon}</div>
          <h2 className="garantia-title">{item.title}</h2>
          <p className="garantia-text">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Garantias;