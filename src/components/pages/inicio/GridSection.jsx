import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TwoColumnCard from "./TwoColumnCard";
import "./inicio.css";

const GridSection = () => {
  const cardsData = [
    {
      title: "Descubre tu siguiente juego favorito",
      subtitle: "Disfruta de cientos de juegos por un módico precio mensual",
      buttonText: "CONSÍGUELO AHORA",
      buttonLink: "/tienda",
      leftBgColor: "#9f007cff",
      imageUrl:
        "https://cms-assets.xboxservices.com/assets/5a/e7/5ae748fa-57d1-441e-a97e-493e8b25d109.jpg?n=XGP-2024_Small-tout-1084_916521_475x534.jpg",
      imageAlt: "Membresia Xbox Game Pass",
      direction: "text-left",
      buttonVariant: "warning",
    },
    {
      title: "Battlefield 6",
      buttonText: "HAZ CLICK PARA VER MÁS DETALLES >",
      buttonLink: "/detalle-producto/11",
      leftBgColor: "#9f007cff",
      textColor: "#ffff",
      imageUrl:
        "https://cms-assets.xboxservices.com/assets/12/24/12243f96-6935-4fcb-bd49-cdb7d3455f21.jpg?n=944371_Small-tout-1084_Wishlist_475x534.jpg",
      imageAlt: "Battlefield 6",
      direction: "text-left",
      buttonVariant: "link",
    },
    {
      label: "DISPONIBLE AHORA",
      title: "World of Warcraft®",
      subtitle:
        "Encuentra tu centro. Juega con poder. Levántate para defender Pandaria.",
      buttonText: "CONSIGUELO AHORA",
      buttonLink: "/detalle-producto/12",
      leftBgColor: "#9f007cff",
      imageUrl:
        "https://cms-assets.xboxservices.com/assets/ae/2e/ae2e005f-d4b6-4373-933d-3b464221a62d.jpg?n=WoW-Classic-Mists_Small-tout-1084_475x534.jpg",
      imageAlt: "World of Warcraft®: Mists of Pandaria Classic™",
      direction: "text-left",
      buttonVariant: "link",
    },
    {
      title: "Gran Venta De Juegos",
      subtitle: "Ahorra hasta un 67% en determinados juegos.",
      buttonText: "VER MÁS INFORMACIÓN",
      buttonLink: "/tienda",
      leftBgColor: "#9f007cff",
      textColor: "#ffff",
      imageUrl:
        "https://cms-assets.xboxservices.com/assets/a1/a8/a1a829b4-8c39-4a90-9d52-4aa08b69bf12.jpg?n=UGS-25_Small-tout-1084_ROW_475x534.jpg",
      imageAlt: "Gran Venta de Juegos",
      direction: "text-left",
      buttonVariant: "link",
    },
    {
      label: "DISPONIBLE AHORA",
      title: "EA SPORTS™ College Football 26",
      subtitle: "Construye tu legado.",
      buttonText: "CONSÍGUELO AHORA",
      buttonLink: "/detalle-producto/13",
      leftBgColor: "#9f007cff",
      textColor: "#ffff",
      imageUrl:
        "https://cms-assets.xboxservices.com/assets/3d/ba/3dba8da9-8836-43da-95fc-54065e2147f0.jpg?n=EA-CF26_Small-tout-1084_Launch_475x534.jpg",
      imageAlt: "Gran Venta de Juegos",
      direction: "text-left",
      buttonVariant: "link",
    },
    {
      label: "NUEVO DLC",
      title: "Minecraft",
      subtitle:
        "Rescata a los Pitufos de Gargamel en el nuevo DLC de los Pitufos",
      buttonText: "CONSÍGUELO AHORA",
      buttonLink: "/detalle-producto/14",
      leftBgColor: "#9f007cff",
      textColor: "#ffff",
      imageUrl:
        "https://cms-assets.xboxservices.com/assets/fe/c1/fec1f909-2048-428f-ac33-ad6a147a0abb.jpg?n=Minecraft_Small-tout-1084_Smurfs-DLC_475x534.jpg",
      imageAlt: "Gran Venta de Juegos",
      direction: "text-left",
      buttonVariant: "link",
    },
    {
      title: "Killing Floor 3",
      subtitle: "Mata zombis, gana dinero, equípate, repite.",
      buttonText: "CONSÍGUELO AHORA",
      buttonLink: "/detalle-producto/15",
      leftBgColor: "#9f007cff",
      textColor: "#ffff",
      imageUrl:
        "https://cms-assets.xboxservices.com/assets/f3/92/f392a30c-9d64-45ba-85b8-28646df1de04.jpg?n=KF3_Small-tout-1084_475x534.jpg",
      imageAlt: "Gran Venta de Juegos",
      direction: "text-left",
      buttonVariant: "link",
    },
    {
      label: "JUEGA AHORA",
      title: "Abiotic Factor",
      subtitle:
        "Un juego de supervivencia y construcción guiado por la historia, ya disponible.",
      buttonText: "CONSÍGUELO AHORA",
      buttonLink: "/detalle-producto/16",
      leftBgColor: "#9f007cff",
      imageUrl:
        "https://cms-assets.xboxservices.com/assets/c0/62/c062e55b-0ceb-4b49-bf3a-9602dfed7320.jpg?n=Abiotic-Factor_Small-tout-1084_475x534.jpg",
      imageAlt: "Abiotic Factor",
      direction: "text-left",
      buttonVariant: "link",
    },
  ];

  const cardRefs = useRef([]);
  const [visibleStates, setVisibleStates] = useState(
    cardsData.map(() => false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleStates((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  return (
    <section className="grid-page-section py-5">
      <Container fluid>
        <Row className="g-3">
          {cardsData.map((card, index) => (
            <Col lg={6} md={12} key={index}>
              <TwoColumnCard
                {...card}
                ref={(el) => {
                  cardRefs.current[index] = el;
                  if (el) el.dataset.index = index;
                }}
                animationClass={`
                  ${index % 2 === 0 ? "fade-in-left" : "fade-in-right"}
                  ${visibleStates[index] ? "is-visible" : ""}
                `}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GridSection;
