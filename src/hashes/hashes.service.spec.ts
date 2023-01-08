import { Test, TestingModule } from '@nestjs/testing';
import { HashesService } from './hashes.service';

describe('HashesService', () => {
  let service: HashesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HashesService],
    }).compile();

    service = module.get<HashesService>(HashesService);
  });

  it('should be defined', () => {
    expect(service.getHash()).toBe('this is a test!');
  });
});
