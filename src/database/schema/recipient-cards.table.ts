import { integer } from 'drizzle-orm/pg-core';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const recipientCards = pgTable('recipient_cards', {
  id: serial('id').primaryKey(),
  cardNumber: varchar('card_number').notNull(),
  holderName: varchar('holder_name').notNull(),
  userId: integer('user_id').notNull(),
  title: varchar('title'),
});
