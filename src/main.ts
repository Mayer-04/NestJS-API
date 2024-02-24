import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const URL = await app.getUrl();
  console.log(`Server running on port ${URL}`);
};
bootstrap();
