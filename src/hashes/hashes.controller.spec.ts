import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HashEntity } from './hash.entity';
import { HashesController } from './hashes.controller';
import { HashesService } from './hashes.service';

describe('HashesController', () => {
  let controller: HashesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HashesController],
      providers: [
        HashesService,
        {
          provide: getRepositoryToken(HashEntity),
          useValue: {
            findOneByUsername: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
            findOneBy: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<HashesController>(HashesController);
  });

  it('HashesController should be defined', async () => {
    expect(controller).toBeDefined();
  });
});
