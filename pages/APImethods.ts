
import { expect, APIResponse, APIRequestContext } from '@playwright/test';
import { test } from '../tests/_fixtures/fixtures';
import dotenv from 'dotenv';
dotenv.config();

export class APIMethods {
  readonly request: APIRequestContext;
  response: APIResponse;
  readonly productsListEndpoint: string;
  readonly brandsListEndpoint: string;
  readonly verifyLoginEndpoint: string;
  readonly signUpEndpoint: string;

  constructor(request: APIRequestContext, response: APIResponse) {
    this.request = request;
    this.response = response;
    this.productsListEndpoint = process.env.PRODUCTS_LIST_ENDPOINT;
    this.brandsListEndpoint = process.env.BRANDS_LIST_ENDPOINT;
    this.verifyLoginEndpoint = process.env.VERIFY_LOGIN_ENDPOINT;
    this.signUpEndpoint = process.env.SIGN_UP_USER_ENDPOINT;
    this.deleteUserEndpoint = process.env.DELETE_USER_ENDPOINT;
  }

  async getAllProducts() {
    const response = await this.request.get(this.productsListEndpoint);

    return response;
  }

  async signUpUser(user: Object) {
    this.response = await this.request.post(this.signUpEndpoint);
    this.response = await this.request.post(process.env.SIGN_UP_USER_ENDPOINT, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    form: {user},
  });

  const body = await this.response.json();
  console.log('Register response:', body);
  expect(body.responseCode).toBe(201);
  }  

  async loginUser(user: Object) {
    const loginResponse = await this.request.post(process.env.LOGIN_ENDPOINT, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    form: { user },
  });

  const loginBody = await loginResponse.json();
  console.log('Login response:', loginBody);
  expect(loginBody.responseCode).toBe(200);
  }

  async postToAllProductsList() {
    const response = await this.request.post(this.productsListEndpoint);

    return response;
  }

  async putToAllBrandsList() {
    const response = await this.request.put(this.brandsListEndpoint);

    return response;
  }

  async deleteToVerifyLogin() {
    const response = await this.request.delete(this.verifyLoginEndpoint);

    return response;
  }

  async assertResponseHas200Code(response: APIResponse) {
    await test.step(`Verify that the responce has 200 code`, async () => {
      expect(response.status()).toBe(200);
    });
  }

  async assertResponseHas405Code(response: APIResponse) {
    await test.step(`Verify that the responce has 405 code`, async () => {
      const body = await response.json();
      expect(body.responseCode).toBe(405);
    });
  }

  async assertResponseMessage(response: APIResponse) {
    await test.step(`Verify that the responce has the "This request method is not supported." message`, async () => {
      const body = await response.json();
      expect(body.message).toBe('This request method is not supported.');
    });
  }

  async assertResponseBodyToHaveProperty(response: APIResponse, property: string) {
    await test.step(`Verify that the responce has "products" property`, async () => {
      const body = await response.json();
      expect(body).toHaveProperty(property);
    });
  }
}
