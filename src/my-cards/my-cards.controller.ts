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
import { MyCardsService } from './my-cards.service';
import { MyCardsCreateDto } from './dto/my-cards.create.dto';
import { MyCardsUpdateDto } from './dto/my-cards.update.dto';

@Controller('my-cards')
export class MyCardsController {
  constructor(private readonly myCardsService: MyCardsService) {}

  @Get('user/:userId')
  findAll(@Param('userId', ParseIntPipe) userId: number) {
    return this.myCardsService.findAll(userId);
  }

  @Get('user/:userId/:cardNumber')
  findOne(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('cardNumber') cardNumber: string,
  ) {
    return this.myCardsService.findOne(userId, cardNumber);
  }

  @Post()
  create(@Body() data: MyCardsCreateDto) {
    return this.myCardsService.create(data);
  }

  @Patch(':id')
  update(
    @Body() data: MyCardsUpdateDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.myCardsService.update(data, id);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.myCardsService.delete(id);
  }
}
