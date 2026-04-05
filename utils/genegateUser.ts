import { faker } from '@faker-js/faker';

export type User = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  title: string;
  password: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  mobileNumber: string;
};

/*export function generateUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const zipCode = faker.location.zipCode();

  const user = {
    firstName,
    lastName,
    username: `${firstName}_${lastName}`.replaceAll(`'`, ''),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password,
    address: faker.location.streetAddress() + zipCode + faker.company.name(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode,
    mobileNumber: faker.phone.number()
  };

  return user;
};*/

export function generateUser(): User {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const zipCode = faker.location.zipCode();

  return {
    firstName,
    lastName,
    username: `${firstName}_${lastName}`.replaceAll(`'`, ''),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(),
    title: 'Mr',
    address: faker.location.streetAddress() + zipCode + faker.company.name(),
    country: faker.location.country(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode,
    mobileNumber: faker.phone.number()
  };
};