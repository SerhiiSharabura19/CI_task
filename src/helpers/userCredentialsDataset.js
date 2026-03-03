import { faker } from '@faker-js/faker';

let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
let domain = faker.internet.domainName();

export const VALID_NAMES = ['John', 'Mike Brown', 'Mary-Jane', "O'Connor", 'Максим'];
export const VALID_EMAILS = [
  firstName + '@' + domain,
  firstName + '.' + lastName + '@' + domain, 
  Math.random().toString().slice(2, 3) + '@' + Math.random().toString().slice(2, 3),
  firstName + '-' + '@' + lastName + domain,
  firstName + '_' + '@' + lastName + domain,
  firstName + Math.random().toString().slice(2, 3) + '@' + lastName + domain
];


