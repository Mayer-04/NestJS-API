# NestJS - CRUD

Este proyecto es una API REST de usuarios desarrollada en NestJS, utilizando PostgreSQL como base de datos con el ORM [Prisma](https://www.prisma.io/). La API implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar usuarios, así como validaciones de datos y de endpoints para garantizar la integridad y seguridad de la aplicación.

## Requisitos

- [Node.js](https://nodejs.org/en) (v16.0.0 o superior)
- [pnpm](https://pnpm.io/es/) (Puedes instalarlo globalmente con `npm install -g pnpm` o habilitando Corepack con `corepack enable pnpm` desde la v16.13 de Node.js)
- [Docker](https://www.docker.com) (Se requiere Docker para ejecutar los servicios deseados, base de datos PostgreSQL)

## Instalación y Uso

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Mayer-04/NestJS-CRUD.git
   ```

2. Instalar las dependencias:

    ```bash
   pnpm install
   ```

3. Clonar el archivo **.env.template** a **.env** para configurar las variables de entorno. Credenciales de la base de datos.
4. Configurar el **docker-compose.yml** y ejecutar:

   ```bash
   docker-compose up -d
   ```

5. Ejecutar `pnpm run dev` para levantar el proyecto en modo desarrollo.
6. Accede a la API desde:

    ```bash
   http://localhost:5000/api/users
   ```

## Uso

La API expone los siguientes endpoints para realizar operaciones CRUD:

- `GET /api/users`: Obtener todos los usuarios.
- `GET /api/users/:id`: Obtener usuario por su ID.
- `POST /api/users`: Crear un nuevo usuario.
- `PUT /api/users/:id`: Actualizar un usuario existente.
- `DELETE /api/users/:id`: Eliminar un usuario por su ID.

### Documentación de la API

La API está documentada utilizando Swagger. Una vez que el servidor esté en funcionamiento, puedes acceder a la documentación en:

  ```bash
   http://localhost:5000/users
   ```
