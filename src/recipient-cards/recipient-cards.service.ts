import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { and, eq } from 'drizzle-orm';
import { DATABASE_CONNECTION } from 'src/database/database.constants';
import type { Db } from 'src/database/database.schema';
import { recipientCards } from 'src/database/schema/recipient-cards.table';
import { RecipientCardsCreateDto } from './dto/recipient-cards.create.dto';
import { RecipientCardsUpdateDto } from './dto/recipient-cards.update.dto';

@Injectable()
export class RecipientCardsService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly db: Db,
  ) {}

  async findAll(userId: number) {
    return await this.db.query.recipientCards.findMany({
      where: eq(recipientCards.userId, userId),
    });
  }

  async findOne(userId: number, cardNumber: string) {
    const card = await this.db.query.recipientCards.findFirst({
      where: and(
        eq(recipientCards.userId, userId),
        eq(recipientCards.cardNumber, cardNumber),
      ),
    });
    if (!card) {
      throw new NotFoundException(`Card number not found`);
    }
    return card;
  }

  async create(data: RecipientCardsCreateDto) {
    const [card] = await this.db
      .insert(recipientCards)
      .values(data)
      .returning();
    return card;
  }

  async update(data: RecipientCardsUpdateDto, id: number) {
    const [card] = await this.db
      .update(recipientCards)
      .set(data)
      .where(eq(recipientCards.id, id))
      .returning();
    if (!card) {
      throw new NotFoundException(`Card not found`);
    }
    return card;
  }

  async delete(id: number) {
    await this.db.delete(recipientCards).where(eq(recipientCards.id, id));
  }
}
