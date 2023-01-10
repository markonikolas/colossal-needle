import { Test, TestingModule } from '@nestjs/testing';
import { HashesController } from './hashes.controller';
import { HashesRepository } from './hashes.repository';
import { HashesService } from './hashes.service';

describe('HashesController', () => {
  let controller: HashesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HashesController],
      providers: [HashesService, HashesRepository],
    }).compile();

    controller = module.get<HashesController>(HashesController);
  });

  it('should return "this is a test!"', () => {
    expect(controller.getHash()).toBe('this is a test!');
  });

  it('should return "the hash is saved!"', () => {
    expect(controller.setHash()).toBe('the hash is saved!');
  });
});
