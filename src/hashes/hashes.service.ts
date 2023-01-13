import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HashEntity } from './hash.entity';

@Injectable()
export class HashesService {
  constructor(
    @InjectRepository(HashEntity)
    private readonly hashesRepository: Repository<HashEntity>,
  ) {}

  async findAll() {
    return await this.hashesRepository.find();
  }

  async findOneByUsername(username: string): Promise<HashEntity | null> {
    return await this.hashesRepository.findOneBy({ username });
  }

  async create(username: string, hash: string) {
    const user = this.hashesRepository.create({ username, hash });

    return await this.hashesRepository.save(user);
  }

  async update(username: string, hash: string) {
    return await this.hashesRepository.update({ username }, { hash });
  }

  async terminate(username: string) {
    return await this.hashesRepository.update(
      { username },
      { terminated: true },
    );
  }
}
