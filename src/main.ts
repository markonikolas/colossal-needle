import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

import configuration from './config/configuration';

async function bootstrap() {
  const { port } = configuration();
  const app = await NestFactory.create(AppModule);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/v1/api');

  await app.listen(port || 5000);
}

bootstrap();
