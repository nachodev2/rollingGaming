# 🎮 Rolling Gaming Store

¡Bienvenido a **Rolling Gaming Store**! Tu destino definitivo para la compra y exploración de juegos digitales. Sumérgete en un vasto catálogo de títulos para diversas plataformas y disfruta de una experiencia de usuario fluida y moderna, directamente desde tu navegador.

Este proyecto es el **frontend completo** de una tienda de e-commerce de juegos digitales, diseñado para ofrecer una interacción intuitiva y visualmente atractiva con el catálogo de juegos.

## 🚀 Tecnologías Utilizadas

Este proyecto ha sido construido exclusivamente con tecnologías frontend, utilizando las siguientes librerías y herramientas para asegurar un rendimiento óptimo y una excelente experiencia de usuario:

* **React v19.1.0:** Biblioteca principal para la construcción de la interfaz de usuario.
* **React Router v7.7.0:** Para la gestión del enrutamiento y la navegación fluida dentro de la aplicación de una sola página (SPA).
* **Bootstrap v5.3.7:** Framework CSS para un diseño base responsivo y estandarizado.
* **Bootstrap Icons v1.13.1:** Conjunto de iconos que complementan el diseño de Bootstrap.
* **React Bootstrap v2.10.10:** Implementación de componentes de Bootstrap para React, facilitando su uso en el ecosistema React.
* **React Hook Form v7.60.0:** Para la gestión eficiente y optimizada de formularios en React.
* **React Select v5.10.2:** Un componente de selección (dropdown) flexible y con muchas características.
* **React Spinners v0.17.0:** Colección de componentes de carga visualmente atractivos.
* **SweetAlert2 v11.22.2:** Librería para alertas personalizables y amigables.
* **UUID v11.1.0:** Para generar identificadores únicos universales (UUIDs) cuando sea necesario.
* **Vite:** (Asumo que lo usas para el entorno de desarrollo y build, ya que es lo más común con React y npm en la actualidad). Herramienta de desarrollo de próxima generación para un arranque más rápido del proyecto y una experiencia de desarrollo mejorada.

## ✨ Características Principales

* **Exploración de Juegos:** Navega por un extenso catálogo de juegos digitales.
* **Interfaz Intuitiva:** Diseño limpio y fácil de usar, construido con React y Bootstrap.
* **Búsqueda y Filtrado:** Funcionalidades para encontrar rápidamente juegos específicos por categorías, nombre, etc.
* **Detalles de Producto:** Páginas dedicadas para cada juego con información relevante.
* **Formularios Optimazados:** Gestión de datos a través de formularios robustos con React Hook Form.
* **Notificaciones Amigables:** Uso de SweetAlert2 para mensajes de éxito, error y confirmación.
* **Indicadores de Carga:** Experiencia de usuario mejorada con spinners durante la carga de contenido.
* **Diseño Responsivo:** Adaptabilidad a diferentes tamaños de pantalla (escritorio y móvil).

## ⚙️ Instalación y Configuración

Sigue estos pasos para clonar el repositorio y poner en marcha el frontend de **Rolling Gaming Store** en tu máquina local.

### Prerequisitos

Asegúrate de tener instalado lo siguiente:

* [Node.js](https://nodejs.org/es/) (versión 18 o superior recomendada)
* [npm](https://www.npmjs.com/) (viene con Node.js) o [Yarn](https://yarnpkg.com/)

### Pasos de Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/rolling-gaming-store.git](https://github.com/tu-usuario/rolling-gaming-store.git)
    cd rolling-gaming-store
    ```
    (Ajusta `tu-usuario/rolling-gaming-store` por la URL real de tu repositorio)

2.  **Instala las dependencias:**
    ```bash
    npm install
    # o si usas Yarn
    yarn install
    ```

3.  **Configura las variables de entorno (si aplica):**
    Si tu aplicación frontend necesita conectarse a una API de backend, es posible que necesites un archivo `.env`. Crea un archivo `.env` en la raíz del proyecto y añade las variables necesarias. Por ejemplo:
    ```
    VITE_API_BASE_URL=http://localhost:5000/api
    ```
    *(Ajusta `VITE_API_BASE_URL` según la URL de tu backend o las variables que uses)*

4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    # o si usas Yarn
    yarn dev
    ```
    La aplicación debería estar disponible en tu navegador en `http://localhost:5173` (o el puerto que Vite asigne).

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor, sigue estos pasos:

1.  Haz un "fork" de este repositorio.
2.  Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3.  Realiza tus cambios y haz "commit" (`git commit -am 'feat: Añade nueva funcionalidad'`).
4.  Sube tus cambios a tu "fork" (`git push origin feature/nueva-funcionalidad`).
5.  Abre un "Pull Request" describiendo tus cambios.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

¡Gracias por revisar **Rolling Gaming Store**! Si tienes alguna pregunta o sugerencia, no dudes en abrir un "issue".