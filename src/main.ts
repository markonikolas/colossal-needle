import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import configuration from './config/configuration';

async function bootstrap() {
  const { port } = configuration();
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/v1/api');

  await app.listen(port || 5000);
}

bootstrap();
