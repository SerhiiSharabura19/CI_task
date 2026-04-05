import { test as base } from '@playwright/test';
import Database from 'better-sqlite3';
import { DB_PATH } from '../constants';

type Fixtures = {
  userFromDB: (id: string) => { name: string; email: string; password: string };
};

export const test = base.extend<Fixtures>({
  userFromDB: async ({}, use) => {
    const db = new Database('tests/.data/users.db', { readonly: true });

    const fn = (id: string) =>
      db.prepare('SELECT name, email, password FROM users WHERE id = ?').get(id) as
        { name: string; email: string; password: string };

    await use(fn);
    db.close();
  },
});