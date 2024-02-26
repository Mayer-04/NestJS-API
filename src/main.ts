import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const SERVER_PORT = configService.get<number>('PORT');

  // Documentación Swagger
  const config = new DocumentBuilder()
    .setTitle('CRUD users')
    .setDescription('REST API to manage users')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('users', app, document);

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
