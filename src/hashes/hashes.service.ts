import { Injectable } from '@nestjs/common';
import { HashesRepository } from './hashes.repository';

@Injectable()
export class HashesService {
  constructor(private readonly hashesRepository: HashesRepository) {}

  getHash(): string {
    return this.hashesRepository.getHash();
  }

  setHash(): string {
    return this.hashesRepository.setHash();
  }
}
