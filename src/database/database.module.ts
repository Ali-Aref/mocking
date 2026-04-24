import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { ConfigService } from '@nestjs/config';

// A constant for referencing your custom provider to use in other services
export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

@Module({
  providers: [
    {
      provide: DATABASE_CONNECTION,
      useFactory: (config: ConfigService) => {
        const pool = new Pool({
          connectionString: config.get<string>('DB_URL'),
        });
        return drizzle(pool, {
          schema: {
            // add your db schemas here for ts query support
          },
        });
      },
      inject: [ConfigService], // inject configService for provider
    },
  ],
  exports: [DATABASE_CONNECTION],
})
export class DatabaseModule {}
