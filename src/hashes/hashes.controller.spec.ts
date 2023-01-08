import { Test, TestingModule } from '@nestjs/testing';
import { HashesController } from './hashes.controller';
import { HashesService } from './hashes.service';

describe('HashesController', () => {
  let controller: HashesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HashesController],
      providers: [HashesService],
    }).compile();

    controller = module.get<HashesController>(HashesController);
  });

  it('should return "this is a test!"', () => {
    expect(controller.getHash()).toBe('this is a test!');
  });
});
