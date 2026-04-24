import { Test, TestingModule } from '@nestjs/testing';
import { RecipientCardsService } from './recipient-cards.service';

describe('RecipientCardsService', () => {
  let service: RecipientCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipientCardsService],
    }).compile();

    service = module.get<RecipientCardsService>(RecipientCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
