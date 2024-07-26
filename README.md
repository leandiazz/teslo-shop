# Descripcion

## Correr en dev

1. Clonar repositorio
2. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
3. Instalar dependencias ```pnpm install```
4. Levantar la base de datos ```docker compose up -d```
5. Correr las migraciones de Prisma ```pnpm dlx prisma migrate dev```
6. Ejecutar seed ```pnpm seed```
7. Correr el proyecto ```pnpm run dev```
