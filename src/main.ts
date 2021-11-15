import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { ArraysService } from './arrays/arrays.service';

async function bootstrap() {
  await NestFactory.create(AppModule);
}
bootstrap();
