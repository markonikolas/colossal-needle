import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateHashDTO, GetHashDTO } from './hash.dto';
import { HashesService } from './hashes.service';

@Controller('hashes')
export class HashesController {
  constructor(private readonly hashService: HashesService) {}

  @Get('/:username')
  async findOneUserName(@Param() param: GetHashDTO) {
    const { username } = param;

    return await this.hashService.findOneByUsername(username);
  }

  @Post()
  async create(@Body() body: CreateHashDTO) {
    const { username, hash } = body;

    return await this.hashService.create(username, hash);
  }
}
