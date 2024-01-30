import { migrate } from 'drizzle-orm/bun-sqlite/migrator';

import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

(async () => {
  const sqlite = new Database('sqlite.db');
  const db = drizzle(sqlite);
  
  console.log('Starting migrations');
  
  await migrate(db, { migrationsFolder: 'drizzle' });
  
  console.log('Migrations complete.');
})();
