
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
  readonly loginEndpoint: string;
  readonly deleteUserEndpoint: string;

  constructor(request: APIRequestContext, response: APIResponse) {
    this.request = request;
    this.response = response;
    this.productsListEndpoint = process.env.PRODUCTS_LIST_ENDPOINT;
    this.brandsListEndpoint = process.env.BRANDS_LIST_ENDPOINT;
    this.verifyLoginEndpoint = process.env.VERIFY_LOGIN_ENDPOINT;
    this.signUpEndpoint = process.env.SIGN_UP_USER_ENDPOINT;
    this.deleteUserEndpoint = process.env.DELETE_USER_ENDPOINT;
    this.loginEndpoint = process.env.LOGIN_ENDPOINT;
  }

  async getAllProducts() {
  return test.step(`Get the list of all products`, async () => {
    return this.request.get(this.productsListEndpoint);
  });
}

  async signUpUser(user: Object) {
    await test.step(`Sign up a new user`, async () => {
      this.response = await this.request.post(this.signUpEndpoint, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        form: { ...user },
      });

      const body = await this.response.json();
      console.log('Register response:', body);
      expect(body.responseCode).toBe(201);
    });
  }

  async loginUser(user: Object) {
    await test.step(`Log in the user`, async () => {
      const loginResponse = await this.request.post(this.loginEndpoint, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        form: { ...user },
      });
      const loginBody = await loginResponse.json();
      console.log('Login response:', loginBody);
      expect(loginBody.responseCode).toBe(200);
    });
  }

  async deleteUser(user: Object) {
    await test.step(`Delete the user`, async () => {
      const deleteResponse = await this.request.delete(this.deleteUserEndpoint, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        form: { ...user },
      });
      const deleteBody = await deleteResponse.json();
      console.log('Delete response:', deleteBody);
      expect(deleteBody.responseCode).toBe(200);
    });
  }

  async postToAllProductsList() {
    return await test.step(`Send a POST request to "allProducts" endpoint`, async () => {
      const response = await this.request.post(this.productsListEndpoint);

      return response;
    });
  }

  async putToAllBrandsList() {
    return await test.step(`Send a PUT request to "brandsList" endpoint`, async () => {
      const response = await this.request.put(this.brandsListEndpoint);

      return response;
    });
  }

  async deleteToVerifyLogin() {
    return await test.step(`Send a DELETE request to "verifyLogin" endpoint`, async () => {
      const response = await this.request.delete(this.verifyLoginEndpoint);

      return response;
    });
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
