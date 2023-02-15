import { Test, TestingModule } from '@nestjs/testing';
import { GetdbService } from './getdb.service';

describe('GetdbService', () => {
  let service: GetdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetdbService],
    }).compile();

    service = module.get<GetdbService>(GetdbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
