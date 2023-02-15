import { Test, TestingModule } from '@nestjs/testing';
import { GetdbController } from './getdb.controller';
import { GetdbService } from './getdb.service';

describe('GetdbController', () => {
  let controller: GetdbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetdbController],
      providers: [GetdbService],
    }).compile();

    controller = module.get<GetdbController>(GetdbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
