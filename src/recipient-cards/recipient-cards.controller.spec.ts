import { Test, TestingModule } from '@nestjs/testing';
import { RecipientCardsController } from './recipient-cards.controller';
import { RecipientCardsService } from './recipient-cards.service';

describe('RecipientCardsController', () => {
  let controller: RecipientCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipientCardsController],
      providers: [RecipientCardsService],
    }).compile();

    controller = module.get<RecipientCardsController>(RecipientCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
