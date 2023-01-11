import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateHashDto, GetHashDto } from './hash.dto';
import { HashesService } from './hashes.service';

@Controller('hashes')
export class HashesController {
  constructor(private readonly hashService: HashesService) {}

  @Get('/:username')
  async findOneByUsername(@Param() param: GetHashDto) {
    const { username } = param;

    return await this.hashService.findOneByUsername(username);
  }

  @Post()
  async create(@Body() body: CreateHashDto) {
    const { username, hash } = body;

    return await this.hashService.create(username, hash);
  }
}
