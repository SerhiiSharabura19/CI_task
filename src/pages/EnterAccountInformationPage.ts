import {test, expect} from '@playwright/test';
import type { Page, Locator } from '@playwright/test';

export class AccountInformationPage {

  readonly page: Page;
  readonly title: Locator;
  readonly mrRadioBtn: Locator;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly day: Locator;
  readonly month: Locator;
  readonly year: Locator;
  readonly newsletterCheckbox: Locator;
  readonly specialOffersCheckbox: Locator;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly companyField: Locator;
  readonly addressField: Locator;
  readonly address2Field: Locator;
  readonly countryDropdown: Locator;
  readonly stateField: Locator;
  readonly cityField: Locator;
  readonly zipcodeField: Locator;
  readonly mobileNumberField: Locator;
  readonly createAccountBtn: Locator;

constructor(page: Page) {
  this.page = page;
  this.title = page.locator('.title.text-center').nth(1);
  this.mrRadioBtn = page.locator('#id_gender1');
  this.nameField = page.getByTestId('name');
  this.emailField = page.getByTestId('email');
  this.passwordField = page.getByTestId('password');
  this.day = page.getByTestId('days');
  this.month = page.getByTestId('months');
  this.year = page.getByTestId('years');
  this.newsletterCheckbox = page.locator('[name="newsletter"]');
  this.specialOffersCheckbox = page.locator('[name="optin"]');
  this.firstNameField = page.getByTestId('first_name');
  this.lastNameField = page.getByTestId('last_name');
  this.companyField = page.getByTestId('company');
  this.addressField = page.getByTestId('address');
  this.address2Field = page.getByTestId('address2');
  this.countryDropdown = page.getByTestId('country');
  this.stateField = page.getByTestId('state');
  this.cityField = page.getByTestId('city');
  this.zipcodeField = page.getByTestId('zipcode');
  this.mobileNumberField = page.getByTestId('mobile_number');
  this.createAccountBtn = page.getByTestId('create-account');
};

async assertAccountInformationPageTitle() {
  await test.step(`Assert Account Information Page title is visible`, async() => {
    await expect(this.title).toBeVisible();
  });
}

async assertMrRadioBtnIsVisible() {
  await test.step(`Assert 'Mr.' radio button is visible`, async() => {
    await expect(this.mrRadioBtn).toBeVisible();
  });
}

async waitForAccountInformationPage() {
  await test.step(`Wait until the Account Information page is loaded`, async() => {
    await this.page.waitForLoadState('load');
  });
}

async checkRadioBtn() {
  await test.step(`Check "Mr" radio button`, async() => {
    await this.mrRadioBtn.check();
  });
}

async fillPasswordField(password: string) {
  await test.step(`Fill in the password field`, async() => {
    await this.passwordField.fill(password);
  });
}

async selectRandomDay() {
  await test.step(`Select a day in the Date of Birth section`, async() => {
    const randomDay = Math.floor(Math.random() * 28) + 1;
    await this.day.selectOption(randomDay.toString());
  });
}

async selectRandomMonth() {
  await test.step(`Select a month in the Date of Birth section`, async() => {
  const months = [
    'January', 
    'February', 
    'March', 
    'April',
    'May',
    'June', 
    'July', 
    'August',
    'September', 
    'October', 
    'November', 
    'December'
  ];
  let randomMonth = months[Math.floor(Math.random() * months.length)];
  if (randomMonth === '0') {
    randomMonth = '1';
  }
  await this.month.selectOption({ label: randomMonth });
  });
}

async selectRandomYear() {
  await test.step(`Select a year in the Date of Birth section`, async() => {
    const minYear = 1900;
    const maxYear = 2021;
    const randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;  
    await this.year.selectOption(randomYear.toString());
  });
}

async checkSignUpForNewsLetter() {
  await test.step(`Check "Sign up for our newsletter!" checkbox`, async() => {
    await this.newsletterCheckbox.check();
  });
} 

async enterFirstName(firstName: string) {
  await test.step(`Fill in the "First name" field`, async() => {
    await this.firstNameField.fill(firstName);
  });
} 

async enterLastName(lastName: string) {
  await test.step(`Fill in the "Last name" field`, async() => {
    await this.lastNameField.fill(lastName);
  });
} 

async enterAddress(address: string) {
  await test.step(`Fill in the "Address" field`, async() => {
    await this.addressField.fill(address);
  });
}

async selectCountry() {
  await test.step(`Select a Country`, async() => {
  const country = [
    'India', 
    'United States', 
    'Canada', 
    'Australia',
    'Israel',
    'New Zealand', 
    'Singapore'
  ];
  const randomCountry = country[Math.floor(Math.random() * country.length)];
  await this.countryDropdown.selectOption({ label: randomCountry });
  });
}

async enterState(state: string) {
  await test.step(`Fill in the "State" field`, async() => {
    await this.stateField.fill(state);
  });
}

async enterCity(city: string) {
  await test.step(`Fill in the "City" field`, async() => {
    await this.cityField.fill(city);
  });
}

async enterZipCode(zip: string) {
  await test.step(`Fill in the "Zipcobe" field`, async() => {
    await this.zipcodeField.fill(zip);
  });
}

async enterMobileNumber(mobileNumber: string) {
  await test.step(`Fill in the "Mobile number" field`, async() => {
    await this.mobileNumberField.fill(mobileNumber);
  });
}

async clickCreateAccount() {
  await test.step(`Click the [Create Account] button`, async() => {
    await this.createAccountBtn.click();
  });
}

}