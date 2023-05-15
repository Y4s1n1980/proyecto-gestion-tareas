# Proyecto de Gestión de Tareas

Este es un proyecto de gestión de tareas desarrollado con Node.js y Express.js. Proporciona una API para crear, editar, eliminar y obtener tareas, así como funciones de autenticación de usuarios.

## Requisitos previos

- Node.js
- PostgreSQL

## Instalación

1. Clona este repositorio en tu máquina local.

git clone (`https://github.com/tu-usuario/proyecto-gestion-tareas.git`)

2-Accede al directorio del proyecto.

cd proyecto-gestion-tareas

3-Instala las dependencias del proyecto.

npm install

4-Crea un archivo .env en el directorio raíz del proyecto y configura las variables de entorno necesarias.

PORT=4000
DB_URL=postgres://user1:1234@localhost:5432/prueba
SECRET=DO_NOT_USE_IN_PRODUCCION

5-Inicia el servidor de desarrollo.

npm start

El servidor estará disponible en (`http://localhost:4000.`)

## Uso

### Autenticación

- `POST /login`: Inicia sesión y genera un token de autenticación JWT.

### Tareas

- `GET /tasks`: Obtiene la lista de tareas. Requiere autenticación.
- `POST /tasks`: Crea una nueva tarea. Requiere autenticación.
- `PUT /tasks/:id`: Actualiza una tarea existente. Requiere autenticación.
- `DELETE /tasks/:id`: Elimina una tarea existente. Requiere autenticación.

### Usuarios

- `GET /users`: Obtiene la lista de usuarios. Requiere autenticación.
- `POST /users`: Crea un nuevo usuario.
- `PUT /users/:id`: Actualiza los datos de un usuario existente. Requiere autenticación.
- `DELETE /users/:id`: Elimina un usuario existente. Requiere autenticación.

### Comentarios

-GET /tasks/:id/comments: Obtiene los comentarios de una tarea. Requiere autenticación.
-POST /comments: Agrega un comentario a una tarea. Requiere autenticación.
-DELETE /comments/:id: Elimina un comentario existente. Requiere autenticación.

### Adjuntos

-GET /attachments: Obtiene la lista de adjuntos. Requiere autenticación.
-POST /attachments: Agrega un adjunto. Requiere autenticación.
-PUT /attachments/:id: Actualiza un adjunto existente. Requiere autenticación.
-DELETE /attachments/:id: Elimina un adjunto existente. Requiere autenticación.

### Categorías

-GET /categories: Obtiene la lista de categorías. Requiere autenticación.
-POST /categories: Agrega una nueva categoría. Requiere autenticación.
-PUT /categories/:id: Actualiza una categoría existente. Requiere autenticación.
-DELETE /categories/:id: Elimina una categoría existente. Requiere autenticación.

**Nota:** Reemplaza los nombres de los endpoints y las descripciones con los correspondientes a tu proyecto. Asegúrate de incluir cualquier otro endpoint específico que hayas implementado.

Carpetas Principales

A continuación se presentan las descripciones de las carpetas principales del proyecto:

    configs: Contiene archivos de configuración, como la configuración de la base de datos.
    misc: Contiene archivos misceláneos, como archivos de errores.
    models: Contiene los modelos de datos utilizados en el proyecto.
    routes: Contiene las definiciones de rutas y controladores del proyecto.
    utils: Contiene utilidades y funciones auxiliares.

Archivos Principales

A continuación se presentan las descripciones de los archivos principales del proyecto:

    app.js: Archivo principal de la aplicación Express. Configura el servidor y define las rutas.
    db.js: Archivo de configuración de la base de datos. Utiliza Slonik para conectarse a PostgreSQL.
    taskcontrollers.js: Archivo que contiene los controladores de las tareas. Define funciones para obtener, agregar, marcar como completadas y eliminar tareas.
    nodemailer.js: Archivo que contiene la configuración de Nodemailer para enviar correos electrónicos.
    errors.js: Archivo que define los objetos de errores utilizados en el proyecto.

Contribuir

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

    Haz un fork del repositorio.
    Crea una rama para tu nueva funcionalidad (git checkout -b feature/nueva-funcionalidad).
    Realiza los cambios necesarios y realiza commits (git commit -am 'Agregar nueva funcionalidad').
    Push a la rama (git push origin feature/nueva-funcionalidad).
    Abre un pull request.

Recuerda reemplazar las secciones relevantes con las versiones adecuadas de Node.js y PostgreSQL, y la sección "Uso" con los endpoints y descripciones específicos de tu proyecto.
