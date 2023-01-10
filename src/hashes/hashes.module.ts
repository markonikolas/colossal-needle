import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Hash } from './hash.entity';
import { HashesController } from './hashes.controller';
import { HashesRepository } from './hashes.repository';
import { HashesService } from './hashes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hash])],
  providers: [HashesService, HashesRepository],
  controllers: [HashesController],
  exports: [HashesModule],
})
export class HashesModule {}
