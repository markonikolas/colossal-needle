import { Controller, Get } from '@nestjs/common';
import { HashesService } from './hashes.service';

@Controller('hashes')
export class HashesController {
  constructor(private readonly hashService: HashesService) {}

  @Get()
  getHash(): string {
    return this.hashService.getHash();
  }
}
