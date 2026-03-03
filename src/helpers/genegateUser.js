import { faker } from '@faker-js/faker';

export function generateUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const zipCode = faker.location.zipCode();

  const user = {
    firstName,
    lastName,
    username: `${firstName}_${lastName}`.replaceAll(`'`),
    email: faker.internet.email().toLowerCase(),
    password: `${faker.internet.password}`,
    address: faker.location.streetAddress() + zipCode + faker.company.name(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode,
    mobileNumber: faker.phone.number()
  };

  return user;
};