import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/config.validation';
import { MyCardsModule } from './my-cards/my-cards.module';
import { RecipientCardsModule } from './recipient-cards/recipient-cards.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: validate }),
    DatabaseModule,
    MyCardsModule,
    RecipientCardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
