import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './src/database/drizzle',
  // schema: './src/**/*.schema.ts', // any file ending with *.schema.ts
  schema: './src/database/schema/*.table.ts', // any file in database/schema folder with .table.ts extension
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_URL!,
  },
});
