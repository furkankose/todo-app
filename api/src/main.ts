import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './modules';
import { HttpExceptionFilter } from './filters/httpException.filter';
import { AnyExceptionFilter } from './filters/anyException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalFilters(new AnyExceptionFilter());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  await app.listen(3000);
}
bootstrap();
