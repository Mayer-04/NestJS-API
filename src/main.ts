import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

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
