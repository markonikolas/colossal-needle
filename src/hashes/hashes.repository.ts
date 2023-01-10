import { Injectable } from '@nestjs/common';

@Injectable()
export class HashesRepository {
  getHash() {
    return 'this is a test!';
  }

  setHash() {
    return 'the hash is saved!';
  }
}
