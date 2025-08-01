const juegosPrueba = [
  {
    id: "1",
    nombreJuego: "God of War: Ragnarök",
    desarrollador: "Santa Monica Studio",
    categoria: "Acción y Aventura",
    precio: 69.99,
    imagen: "https://cdn1.epicgames.com/spt-assets/edaff839f0734d16bc89d2ddb1dc9339/steel-magnolia-1h9av.jpg",
    descripcion: "La esperada secuela de God of War (2018), donde Kratos y su hijo Atreus enfrentan el apocalipsis nórdico. Gráficos espectaculares, combate brutal y una historia cargada de emociones.",
    requisitos: "PlayStation 5. No disponible en PC.",
    microprocesador: "Intel i5-2500K",
    memoriaRam: "10GB",
    grafica: "GTX 1050Ti",
    almacenamiento: "60GB",
    sistemaOperativo: "PlayStation 5",
    puntuacion: 5
  },
  {
    id: "2",
    nombreJuego: "The Witcher 3: Wild Hunt",
    desarrollador: "CD Projekt RED",
    categoria: "Juego de Rol",
    precio: 39.99,
    imagen: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    descripcion: "Juega como Geralt de Rivia, un cazador de monstruos, en un vasto mundo abierto repleto de decisiones morales y misiones épicas.",
    requisitos: "CPU Intel i5-2500K, 6 GB RAM, GTX 770, 35 GB espacio, Windows 7 o superior.",
    microprocesador: "Intel i5-2500K",
    memoriaRam: "6GB",
    grafica: "GTX 770",
    almacenamiento: "35GB",
    sistemaOperativo: "Windows 7+",
    puntuacion: 3.4
  },
  {
    id: "3",
    nombreJuego: "FIFA 24",
    desarrollador: "EA Sports",
    categoria: "Simulación",
    precio: 59.99,
    imagen: "https://cdn2.unrealengine.com/egs-easportsfc25ultimateedition-eacanada-editions-g1a-01-1920x1080-a5e0646a5b8a.jpg",
    descripcion: "El simulador de fútbol más famoso del mundo regresa con gráficos mejorados, inteligencia artificial refinada y licencias oficiales.",
    requisitos: "PC con Intel i5, 8 GB RAM, GTX 1050Ti, 50 GB espacio, Windows 10.",
    microprocesador: "Intel i5",
    memoriaRam: "8GB",
    grafica: "GTX 1050Ti",
    almacenamiento: "50GB",
    sistemaOperativo: "Windows 10",
    puntuacion: 4.2
  },
  {
    id: "4",
    nombreJuego: "Call of Duty: Modern Warfare III",
    desarrollador: "Infinity Ward",
    categoria: "Tiros",
    precio: 69.99,
    imagen: "https://cdn.akamai.steamstatic.com/steam/apps/2000950/header.jpg",
    descripcion: "Acción intensa y cinemática en una guerra moderna. Incluye campaña, modo multijugador y cooperativo.",
    requisitos: "CPU Ryzen 5 1600, 12 GB RAM, GTX 1660, 80 GB espacio, Windows 10.",
    microprocesador: "Ryzen 5 1600",
    memoriaRam: "12GB",
    grafica: "GTX 1660",
    almacenamiento: "80GB",
    sistemaOperativo: "Windows 10",
    puntuacion: 2.9
  },
  {
    id: "5",
    nombreJuego: "Street Fighter 6",
    desarrollador: "Capcom",
    categoria: "Lucha",
    precio: 49.99,
    imagen: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/header.jpg",
    descripcion: "La leyenda de los juegos de lucha regresa con gráficos increíbles y nuevos modos de juego, ideal para competitivos y casuales.",
    requisitos: "Intel i5-7500, 8 GB RAM, GTX 1060, Windows 10, 60 GB libres.",
    microprocesador: "Intel i5-7500",
    memoriaRam: "8GB",
    grafica: "GTX 1060",
    almacenamiento: "60GB",
    sistemaOperativo: "Windows 10",
    puntuacion: 3.6
  },
  {
    id: "6",
    nombreJuego: "Age of Empires IV",
    desarrollador: "Relic Entertainment",
    categoria: "Estrategia",
    precio: 39.90,
    imagen: "https://cdn.akamai.steamstatic.com/steam/apps/1466860/header.jpg",
    descripcion: "Estrategia en tiempo real con campañas históricas, batallas épicas y gráficos renovados.",
    requisitos: "CPU Intel i5-6300U, 8 GB RAM, Intel HD 520, 50 GB espacio, Windows 10.",
    microprocesador: "Intel i5-6300U",
    memoriaRam: "8GB",
    grafica: "Intel HD 520",
    almacenamiento: "50GB",
    sistemaOperativo: "Windows 10",
    puntuacion: 2
  },
  {
    id: "7",
    nombreJuego: "Final Fantasy XVI",
    desarrollador: "Square Enix",
    categoria: "Juego de Rol",
    precio: 74.99,
    imagen: "https://cdn1.epicgames.com/spt-assets/91fdf8a25bef498984af2e46d106c664/skobeloff-nd736.jpg?resize=1&w=480&h=270&quality=medium",
    descripcion: "Una entrega oscura y madura en la saga Final Fantasy, con un sistema de combate espectacular y narrativa cinematográfica.",
    requisitos: "Exclusivo para PS5.",
    microprocesador: "Desconocido",
    memoriaRam: "Desconocido",
    grafica: "Desconocido",
    almacenamiento: "Desconocido",
    sistemaOperativo: "PlayStation 5",
    puntuacion: 4.4
  },
  {
    id: "8",
    nombreJuego: "It Takes Two",
    desarrollador: "Hazelight Studios",
    categoria: "Acción y Aventura",
    precio: 29.99,
    imagen: "https://cdn.akamai.steamstatic.com/steam/apps/1426210/header.jpg",
    descripcion: "Juego cooperativo con mecánicas únicas y narrativa emotiva sobre el trabajo en equipo y la reconciliación.",
    requisitos: "CPU i3-2100T, 8 GB RAM, GTX 660, 50 GB espacio, Windows 8.1.",
    microprocesador: "i3-2100T",
    memoriaRam: "8GB",
    grafica: "GTX 660",
    almacenamiento: "50GB",
    sistemaOperativo: "Windows 8.1",
    puntuacion: 5
  },
  {
    id: "9",
    nombreJuego: "Mortal Kombat 1",
    desarrollador: "NetherRealm Studios",
    categoria: "Lucha",
    precio: 69.99,
    imagen: "https://cdn.akamai.steamstatic.com/steam/apps/1971870/header.jpg",
    descripcion: "La icónica saga de lucha se reinicia con nuevos gráficos, brutalidad clásica y modos online potentes.",
    requisitos: "Ryzen 5 3600, 8 GB RAM, RTX 2070, Windows 10, 100 GB.",
    microprocesador: "Ryzen 5 3600",
    memoriaRam: "8GB",
    grafica: "RTX 2070",
    almacenamiento: "100GB",
    sistemaOperativo: "Windows 10",
    puntuacion: 4
  },
  {
    id: "10",
    nombreJuego: "Gran Turismo 7",
    desarrollador: "Polyphony Digital",
    categoria: "Simulación",
    precio: 59.99,
    imagen: "https://external-game-cover-image-cf.store.on.epicgames.com/101006?resize=1&w=360&h=480&quality=medium",
    descripcion: "El simulador de carreras definitivo para fanáticos del automovilismo, con más de 400 autos y circuitos icónicos.",
    requisitos: "Exclusivo para PlayStation 5.",
    microprocesador: "Desconocido",
    memoriaRam: "Desconocido",
    grafica: "Desconocido",
    almacenamiento: "Desconocido",
    sistemaOperativo: "Windows 8",
    puntuacion: 3
  },
  {
    id: "11",
    nombreJuego: "Battlefield 6",
    desarrollador: "Electronics Arts",
    categoria: "Tiros",
    precio: 59.99,
    imagen: "https://cms-assets.xboxservices.com/assets/12/24/12243f96-6935-4fcb-bd49-cdb7d3455f21.jpg?n=944371_Small-tout-1084_Wishlist_475x534.jpg",
    descripcion: "Prepárate para la experiencia definitiva de la guerra total. Con batallas masivas, destrucción dinámica y un enfoque en la jugabilidad táctica.",
    requisitos: "CPU Intel i5-6600K, 8 GB RAM, GTX 1060, 50 GB espacio, Windows 10.",
    microprocesador: "Intel i5-6600K",
    memoriaRam: "8 GB RAM",
    grafica: "GTX 1060",
    almacenamiento: "100 GB",
    sistemaOperativo: "Windows 11",
    puntuacion: 2.3
  },
  {
    id: "12",
    nombreJuego: "World of Warcraft®: Mists of Pandaria Classic™",
    desarrollador: "Blizzard Entertainment",
    categoria: "Juego de Rol",
    precio: 29.99,
    imagen: "https://cms-assets.xboxservices.com/assets/ae/2e/ae2e005f-d4b6-4373-933d-3b464221a62d.jpg?n=WoW-Classic-Mists_Small-tout-1084_475x534.jpg",
    descripcion: "Vuelve a explorar el mundo de Azeroth con la expansión clásica de Mists of Pandaria. Descubre nuevas razas, clases y una historia épica.",
    requisitos: "CPU Intel i5-3450, 4 GB RAM, GTX 660, 100 GB espacio, Windows 10.",
    microprocesador: "Intel i5-3450",
    memoriaRam: "4 GB RAM",
    grafica: "GTX 660",
    almacenamiento: "100 GB",
    sistemaOperativo: "Windows 10",
    puntuacion: 4.2
  },
  {
    id: "13",
    nombreJuego: "EA SPORTS™ College Football 26",
    desarrollador: "Electronic Arts",
    categoria: "Juego de Rol",
    precio: 59.99,
    imagen: "https://cms-assets.xboxservices.com/assets/3d/ba/3dba8da9-8836-43da-95fc-54065e2147f0.jpg?n=EA-CF26_Small-tout-1084_Launch_475x534.jpg",
    descripcion: "Vive la emoción del fútbol universitario con EA SPORTS™ College Football 26. Juega con tus equipos favoritos y compite por el campeonato nacional.",
    requisitos: "CPU Intel i5-8400, 8 GB RAM, GTX 1060, 50 GB espacio, Windows 10.",
    microprocesador: "Intel i5-8400",
    memoriaRam: "8 GB RAM",
    grafica: "GTX 1060",
    almacenamiento: "50 GB",
    sistemaOperativo: "Windows 10",
    puntuacion: 5
  },
  {
    id: "14",
    nombreJuego: "Minecraft",
    desarrollador: "Mojang Studios",
    categoria: "Acción y Aventura",
    precio: 13.99, 
    imagen: "https://cms-assets.xboxservices.com/assets/fe/c1/fec1f909-2048-428f-ac33-ad6a147a0abb.jpg?n=Minecraft_Small-tout-1084_Smurfs-DLC_475x534.jpg",
    descripcion: "Explora, construye y sobrevive en un mundo de bloques. Con el nuevo DLC de los Pitufos, rescata a los personajes icónicos y disfruta de nuevas aventuras.",
    requisitos: "CPU Intel i5-4690, 8 GB RAM, GTX 660, 4 GB espacio, Windows 10.",
    microprocesador: "Intel i5-4690",
    memoriaRam: "8 GB RAM",
    grafica: "GTX 660",
    almacenamiento: "4 GB",
    sistemaOperativo: "Windows 10",
    puntuacion: 1.2
  },
  {
    id: "15",
    nombreJuego: "Killing Floor 3",
    desarrollador: "Tripwire Interactive",
    categoria: "Lucha",
    precio: 29.99,
    imagen: "https://cms-assets.xboxservices.com/assets/f3/92/f392a30c-9d64-45ba-85b8-28646df1de04.jpg?n=KF3_Small-tout-1084_475x534.jpg",
    descripcion: "Mata zombis, gana dinero, equípate y repite. Con un sistema de combate visceral y una atmósfera aterradora, Killing Floor 3 te sumerge en el horror de la supervivencia.",
    requisitos: "CPU Intel i5-6600K, 8 GB RAM, GTX 970, 50 GB espacio, Windows 10.",
    microprocesador: "Intel i5-6600K",
    memoriaRam: "8 GB RAM",
    grafica: "GTX 970",
    almacenamiento: "50 GB",
    sistemaOperativo: "Windows 10",
    puntuacion: 3.7
  },
  {
    id: "16",
    nombreJuego: "Abiotic Factor",
    desarrollador: "Indie Studio",
    categoria: "Acción y Aventura",
    precio: 19.99,
    imagen: "https://cms-assets.xboxservices.com/assets/c0/62/c062e55b-0ceb-4b49-bf3a-9602dfed7320.jpg?n=Abiotic-Factor_Small-tout-1084_475x534.jpg",
    descripcion: "Un juego de supervivencia y construcción guiado por la historia, donde debes explorar un mundo hostil, recolectar recursos y sobrevivir a los peligros que te rodean.",
    requisitos: "CPU Intel i5-2400, 8 GB RAM, GTX 750, 20 GB espacio, Windows 10.",
    microprocesador: "Intel i5-2400",
    memoriaRam: "8 GB RAM",
    grafica: "GTX 750",
    almacenamiento: "20 GB",
    sistemaOperativo: "Windows 10",
    puntuacion: 4.6
  }
];

export default juegosPrueba;
