import { Module } from '@nestjs/common';
import { MyCardsService } from './my-cards.service';
import { MyCardsController } from './my-cards.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [MyCardsController],
  providers: [MyCardsService],
  imports: [DatabaseModule],
})
export class MyCardsModule {}
