import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { ConfigService } from '@nestjs/config';
import { DATABASE_CONNECTION } from './database.constants';
import { dbSchema } from './database.schema';

@Module({
  providers: [
    {
      provide: DATABASE_CONNECTION,
      useFactory: (config: ConfigService) => {
        const pool = new Pool({
          connectionString: config.get<string>('DB_URL'),
        });
        return drizzle(pool, { schema: dbSchema });
      },
      inject: [ConfigService], // inject configService for provider
    },
  ],
  exports: [DATABASE_CONNECTION],
})
export class DatabaseModule {}
