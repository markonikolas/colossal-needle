import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HashEntity } from './hash.entity';
import { HashesService } from './hashes.service';

describe('HashesService', () => {
  let service: HashesService;
  let repository: Repository<HashEntity>;

  const USER_REPO_TOKEN = getRepositoryToken(HashEntity);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HashesService,
        {
          provide: USER_REPO_TOKEN,
          useValue: {
            findOneByUsername: jest.fn(),
            findOneBy: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<HashesService>(HashesService);
    repository = module.get<Repository<HashEntity>>(USER_REPO_TOKEN);
  });

  it('HashesService should be defined', async () => {
    expect(service).toBeDefined();
  });

  it('HashesRepository should be defined', async () => {
    expect(repository).toBeDefined();
  });
});
