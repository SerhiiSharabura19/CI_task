import { faker } from '@faker-js/faker';

let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
let domain = faker.internet.domainName();

export const VALID_NAMES = ['John', 'Mike Brown', 'Mary-Jane', "O'Connor", 'Максим', '明慧'];
export const VALID_EMAILS = [
  firstName + '@' + domain,
  firstName + '.' + lastName + '@' + domain, 
  Math.random().toString().slice(2, 3) + '@' + Math.random().toString().slice(2, 3),
  firstName + '-' + lastName + '@' + domain,
  firstName + '_' + lastName + '@' + domain,
  firstName + Math.random().toString().slice(2, 3) + '@' + lastName + domain
];

export let validUserData = [
  {
  userName: 'John', 
  email: firstName + '@' + domain,
  description: 'a first name plus at, plus a domain'
  },
  {
  userName: 'Mike Brown',
  email: firstName + '.' + lastName + '@' + domain,
  description: 'a dot in a local part'
  },
  {
  userName: 'Mary-Jane',
  email: Math.random().toString().slice(2, 3) + '@' + Math.random().toString().slice(2, 3),
  description: 'a random number in local and domain parts' 
  },
  {
  userName: "O'Connor",
  email: firstName + '-' + lastName + '@' + domain,
  description: 'a hyppen in a local part'
  },
  {
  userName: 'Максим',
  email: firstName + '_' + lastName + '@' + domain,
  description: 'an underscore in a local part' 
  },
  {
  userName: '明慧',
  email: firstName + Math.random().toString().slice(2, 3) + '@' + lastName + domain,
  description: 'a first name plus a random number'
  }
];

