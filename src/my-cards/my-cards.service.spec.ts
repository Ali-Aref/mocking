import { Test, TestingModule } from '@nestjs/testing';
import { MyCardsService } from './my-cards.service';

describe('MyCardsService', () => {
  let service: MyCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyCardsService],
    }).compile();

    service = module.get<MyCardsService>(MyCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
