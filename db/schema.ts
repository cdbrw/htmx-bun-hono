import { InferSelectModel, sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const todos = sqliteTable('todos', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  content: text('content', { length: 256 }).notNull(),
  timestamp: text('timestamp').default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export type Todo = InferSelectModel<typeof todos>;