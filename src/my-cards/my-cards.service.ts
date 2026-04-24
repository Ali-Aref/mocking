import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { and, eq } from 'drizzle-orm';
import { DATABASE_CONNECTION } from 'src/database/database.constants';
import type { Db } from 'src/database/database.schema';
import { myCards } from 'src/database/schema/my-cards.table';
import { MyCardsCreateDto } from './dto/my-cards.create.dto';
import { MyCardsUpdateDto } from './dto/my-cards.update.dto';

@Injectable()
export class MyCardsService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly db: Db,
  ) {}

  async findAll(userId: number) {
    return await this.db.query.myCards.findMany({
      where: eq(myCards.userId, userId),
    });
  }

  async findOne(userId: number, cardNumber: string) {
    const card = await this.db.query.myCards.findFirst({
      where: and(
        eq(myCards.userId, userId),
        eq(myCards.cardNumber, cardNumber),
      ),
    });
    if (!card) {
      throw new NotFoundException(`Card number not found`);
    }
    return card;
  }

  async create(data: MyCardsCreateDto) {
    const [card] = await this.db.insert(myCards).values(data).returning();
    return card;
  }

  async update(data: MyCardsUpdateDto, id: number) {
    const [card] = await this.db
      .update(myCards)
      .set(data)
      .where(eq(myCards.id, id))
      .returning();
    if (!card) {
      throw new NotFoundException(`Card not found`);
    }
    return card;
  }

  async delete(id: number) {
    await this.db.delete(myCards).where(eq(myCards.id, id));
  }
}
