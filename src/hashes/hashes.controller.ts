import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';

import { GetHashDto, CreateHashDto, UpdateHashDto } from './hash.dto';
import { HashesService } from './hashes.service';
import configuration from 'src/config/configuration';

const { mainRoute } = configuration();

@Controller(mainRoute)
export class HashesController {
  constructor(private readonly hashService: HashesService) {}

  @Get()
  async findAll() {
    return await this.hashService.findAll();
  }

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

  @Patch()
  async update(@Body() body: UpdateHashDto) {
    const { username, hash } = body;

    return await this.hashService.update(username, hash);
  }

  @Delete()
  async terminate(@Body() body: UpdateHashDto) {
    const { username } = body;

    return await this.hashService.terminate(username);
  }
}
