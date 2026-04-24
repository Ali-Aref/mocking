import { Module } from '@nestjs/common';
import { RecipientCardsService } from './recipient-cards.service';
import { RecipientCardsController } from './recipient-cards.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RecipientCardsController],
  providers: [RecipientCardsService],
})
export class RecipientCardsModule {}
