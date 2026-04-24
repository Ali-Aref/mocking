import { Test, TestingModule } from '@nestjs/testing';
import { MyCardsController } from './my-cards.controller';
import { MyCardsService } from './my-cards.service';

describe('MyCardsController', () => {
  let controller: MyCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyCardsController],
      providers: [MyCardsService],
    }).compile();

    controller = module.get<MyCardsController>(MyCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
