import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hash } from './hash.entity';

@Injectable()
export class HashesService {
  constructor(
    @InjectRepository(Hash)
    private readonly hashesRepository: Repository<Hash>,
  ) {}

  async findOneByUsername(username: any): Promise<Hash | null> {
    return await this.hashesRepository.findOneBy({ username });
  }

  async create(username: string, hash: string) {
    const user = this.hashesRepository.create({ username, hash });

    return await this.hashesRepository.save(user);
  }
}
