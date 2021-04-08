import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArraysService } from './arrays/arrays.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ArraysService],
})
export class AppModule {}
