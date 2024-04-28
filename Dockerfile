# Instala este programa
FROM node:22.0.0-alpine3.18

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Coloca el programa en esta carpeta
WORKDIR /usr/src/app

# Copia todos los archivos del proyecto
COPY . .

# Ejecuta este comando
RUN pnpm i

RUN pnpm exec prisma generate
RUN pnpm run build

# Funcione en el puerto especificado
EXPOSE 5000

CMD ["pnpm", "run", "start:prod"]