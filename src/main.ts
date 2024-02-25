import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const SERVER_PORT = configService.get<number>('PORT');

  // Prefijo Global para todas las rutas
  app.setGlobalPrefix('api');

  await app.listen(SERVER_PORT);

  const validationPipe = new ValidationPipe({
    whitelist: true,
    // Transformar o convertir automáticamente los parámetros
    transform: true,
  });
  app.useGlobalPipes(validationPipe);

  const URL = await app.getUrl();
  console.log(`Server running on port ${URL}`);
};

bootstrap();
