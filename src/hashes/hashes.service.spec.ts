import { Test, TestingModule } from '@nestjs/testing';
import { HashesRepository } from './hashes.repository';
import { HashesService } from './hashes.service';

describe('HashesService', () => {
  let service: HashesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HashesService, HashesRepository],
    }).compile();

    service = module.get<HashesService>(HashesService);
  });

  it('should be defined', () => {
    expect(service.getHash()).toBe('this is a test!');
  });

  it('should be defined', () => {
    expect(service.setHash()).toBe('the hash is saved!');
  });
});
