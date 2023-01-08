import { Injectable } from '@nestjs/common';

@Injectable()
export class HashesService {
  getHash(): string {
    return 'this is a test!';
  }
}
