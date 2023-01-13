import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HashEntity } from './hash.entity';
import { HashesController } from './hashes.controller';
import { HashesService } from './hashes.service';
import { UniqueUserConstraint } from './constraints/unique.constraint';

@Module({
  imports: [TypeOrmModule.forFeature([HashEntity])],
  providers: [HashesService, UniqueUserConstraint],
  controllers: [HashesController],
  exports: [HashesModule],
})
export class HashesModule {}
