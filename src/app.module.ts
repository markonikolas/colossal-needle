import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration, { databaseConfig } from './config/configuration';
import { HashesController } from './hashes/hashes.controller';
import { HashesService } from './hashes/hashes.service';
import { HashesModule } from './hashes/hashes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      ...databaseConfig(),
    }),
    HashesModule,
  ],
  controllers: [AppController, HashesController],
  providers: [AppService, HashesService],
})
export class AppModule {}
