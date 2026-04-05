import { test as setup } from '@playwright/test';
import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

const DB_PATH = path.resolve(__dirname, '.data/users.db');


const mockUsers = [
  { id: '1', name: 'John Snow', email: 'john.snow@winterfell.mail', password: 'dragon' },
  { id: '2', name: 'Harry Potter', email: 'harry.potter@griffindor.mail', password: 'hat' },
  { id: '3', name: 'Frodu Baggins', email: 'frodu.baggins@shire.mail', password: 'ring' },
  
];

setup('create new database', async ({ }) => {
  console.log('creating new database...');

  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  const db = new Database(DB_PATH);

  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT,
      email TEXT,
      password TEXT 
    )
  `);

  const insert = db.prepare('INSERT OR REPLACE INTO heroes VALUES (@id, @name, @email, @password)');
  for (const hero of mockUsers) {
    insert.run(hero);
  }

  db.close();
  console.log('Mock hero SQLite DB created');
});