import { test as setup } from './_fixtures/fixtures';
import { generateUser } from '../utils/genegateUser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Database from 'better-sqlite3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const USER_PATH = path.resolve(__dirname, '.data/user.json');
const DB_PATH = path.resolve(__dirname, '.data/users.db');

const mockUsers = [
  { id: '1', name: 'John Snow', email: 'john.snow@winterfell.mail', password: 'dragon' },
  { id: '2', name: 'Harry Potter', email: 'harry.potter@griffindor.mail', password: 'hat' },
  { id: '3', name: 'Frodu Baggins', email: 'frodu.baggins@shire.mail', password: 'ring' },
];

setup('create new database', async () => {
  const dir = path.dirname(DB_PATH);
  fs.mkdirSync(dir, { recursive: true });

  const db = new Database(DB_PATH);

  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT,
      email TEXT,
      password TEXT
    )
  `);

  const insert = db.prepare('INSERT OR REPLACE INTO users VALUES (@id, @name, @email, @password)');
  for (const user of mockUsers) {
    insert.run(user);
  }

  db.close();
  console.log('DB created at:', DB_PATH);
});

setup('register a user via API', async ({ apiManager }) => {
  const user = generateUser();
  
  const userFormParameters = {
    name: user.username,
    email: user.email,
    password: user.password,
    title: user.title,
    firstname: user.firstName,
    lastname: user.lastName,
    address1: user.address,
    country: user.country,
    state: user.state,
    city: user.city,
    zipcode: user.zipCode,
    mobile_number: user.mobileNumber,
  };

  await apiManager.apiMethods.signUpUser(userFormParameters);
  await apiManager.apiMethods.loginUser({    
    email: userFormParameters.email,
    password: userFormParameters.password
  });

  // Save userFormParameters to file (not raw user) so field names stay consistent
  fs.mkdirSync(path.dirname(USER_PATH), { recursive: true });
  fs.writeFileSync(USER_PATH, JSON.stringify(userFormParameters, null, 2));
});


