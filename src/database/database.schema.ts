import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as myCardsSchema from './schema/my-cards.table';
import * as recipientCardsSchema from './schema/recipient-cards.table';

export const dbSchema = {
  ...myCardsSchema,
  ...recipientCardsSchema,
};

export type DbSchema = typeof dbSchema;
export type Db = NodePgDatabase<DbSchema>;
