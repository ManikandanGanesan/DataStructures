import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ArraysService } from './arrays/arrays.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
}
bootstrap();
