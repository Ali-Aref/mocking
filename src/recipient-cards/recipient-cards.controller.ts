import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { RecipientCardsService } from './recipient-cards.service';
import { RecipientCardsCreateDto } from './dto/recipient-cards.create.dto';
import { RecipientCardsUpdateDto } from './dto/recipient-cards.update.dto';

@Controller('recipient-cards')
export class RecipientCardsController {
  constructor(private readonly recipientCardsService: RecipientCardsService) {}

  @Get('user/:userId')
  findAll(@Param('userId', ParseIntPipe) userId: number) {
    return this.recipientCardsService.findAll(userId);
  }

  @Get('user/:userId/:cardNumber')
  findOne(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('cardNumber') cardNumber: string,
  ) {
    return this.recipientCardsService.findOne(userId, cardNumber);
  }

  @Post()
  create(@Body() data: RecipientCardsCreateDto) {
    return this.recipientCardsService.create(data);
  }

  @Patch(':id')
  update(
    @Body() data: RecipientCardsUpdateDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.recipientCardsService.update(data, id);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.recipientCardsService.delete(id);
  }
}
