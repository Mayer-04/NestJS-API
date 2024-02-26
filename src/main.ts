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

  const validationPipe = new ValidationPipe({
    whitelist: true,
  });
  app.useGlobalPipes(validationPipe);

  await app.listen(SERVER_PORT);

  const URL = await app.getUrl();
  console.log(`Server running on port ${URL}`);
};

bootstrap();
