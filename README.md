# 🚀 Gestor de Tareas SPA (Single Page Application)

Bienvenido al Gestor de Tareas, una moderna y robusta Single Page Application (SPA) diseñada para una gestión eficiente de tus actividades diarias. Construida con un stack tecnológico de vanguardia, esta aplicación demuestra las mejores prácticas en desarrollo frontend, ofreciendo una experiencia de usuario fluida y reactiva.

## ✨ Características Destacadas Holis

- **Gestión Completa de Tareas (CRUD)**: Crea, lee, actualiza y elimina tareas de forma intuitiva.
- **Filtrado Dinámico**: Filtra tareas por estado (`Pendiente`, `En progreso`, `Completada`) y por prioridad (`Baja`, `Media`, `Alta`, `Urgente`).
- **Ordenamiento Personalizable**: Organiza tu lista de tareas haciendo clic en los encabezados de columna (Título, Fecha de Vencimiento, Prioridad, Estado).
- **Paginación Avanzada**: Navega fácilmente por grandes listas de tareas, con la opción de ajustar la cantidad de elementos visibles por página (5, 10, 20, 50).
- **Importación de Tareas por Archivo**: Carga múltiples tareas de forma masiva desde un archivo JSON, con validación de formato para asegurar la integridad de los datos.
- **Vista Detallada de Tareas**: Accede a una vista específica para consultar todos los detalles de una tarea individual.
- **Notificaciones Interactuvas (Toasts)**: Recibe retroalimentación visual instantánea sobre el éxito o el fracaso de las operaciones (creación, actualización, eliminación, importación) mediante mensajes de toast personalizables.
- **Experiencia de Usuario Fluida**: Animaciones suaves en la adición y eliminación de tareas, indicadores de carga y manejo eficiente de estados de formularios.
- **Internacionalización (i18n)**: Soporte para múltiples idiomas (Español, Inglés, Italiano) para una experiencia global.
- **Diseño Responsive**: Interfaz adaptable a diferentes tamaños de pantalla, garantizando una usabilidad óptima en dispositivos móviles y de escritorio.
- **Persistencia Local**: Simulación de persistencia de datos mediante `localStorage` para una experiencia de desarrollo sin backend.

## 🛠️ Tecnologías Implementadas

Esta aplicación ha sido construida siguiendo un enfoque de "Composition API First" y adherencia estricta a principios de diseño limpio y modularidad.

- **Vue 3**: El framework progresivo de JavaScript utilizado para construir la interfaz de usuario. Se aprovechan al máximo las características de la Composition API para una lógica de componentes organizada y reutilizable.
- **TypeScript**: Lenguaje de programación fuertemente tipado que mejora la calidad del código, la detección de errores en tiempo de desarrollo y la mantenibilidad, proporcionando una base sólida para aplicaciones escalables.
- **Pinia**: La solución de gestión de estado recomendada para Vue 3. Se utiliza para centralizar y organizar el estado de la aplicación (tareas, estado de carga, errores), haciendo que la comunicación entre componentes sea predecible y eficiente.
  - **Estado (State)**: Manejado con `ref` para reactividad.
  - **Getters**: Propiedades `computed` para derivar estado del store.
  - **Acciones (Actions)**: Funciones asíncronas para modificar el estado y orquestar las operaciones de la API.
- **Vue Router 4**: El enrutador oficial para Vue.js, utilizado para la navegación entre diferentes vistas (lista de tareas, detalle de tarea) de forma declarativa.
- **SCSS (Sass)**: Preprocesador CSS que permite una escritura de estilos más potente y organizada, utilizando variables, anidamiento y mixins.
- **Metodología BEM (Block, Element, Modifier)**: Convención de nomenclatura CSS que promueve la modularidad, reusabilidad y mantenibilidad de los estilos, haciendo que la colaboración en equipos grandes sea más eficiente.
- **Vite**: Un moderno empaquetador de módulos y entorno de desarrollo frontend, que proporciona un arranque de servidor instantáneo y actualizaciones de módulo en caliente (HMR) extremadamente rápidas.
- **`uuid`**: Librería para la generación de identificadores únicos universales (UUIDs), utilizada en la simulación de la API para asegurar que cada tarea tenga un `id` único.
- **`vue-i18n`**: Librería de internacionalización para Vue.js, que facilita la traducción de la interfaz de usuario a múltiples idiomas.

## 🚀 Cómo Empezar

Para poner en marcha el proyecto en tu entorno local:

1.  **Clona el repositorio:**
    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd intelligent-task-manager
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    # o
    yarn install
    # o si usas pnpm
    pnpm install
    ```
3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    # o
    yarn dev
    # o si usas pnpm
    pnpm dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite te indique).
