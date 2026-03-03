import { test, expect, APIResponse, APIRequestContext } from '@playwright/test';

export class APIMethods {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getAllProducts() {
    const response = await this.request.get(
      'https://automationexercise.com/api/productsList',
    );
    return response;
  }

  async postToAllProductsList() {
    const response = await this.request.post(
      'https://automationexercise.com/api/productsList'
    );

    return response;
  }

  async putToAllBrandsList() {
    const response = await this.request.put(
      'https://automationexercise.com/api/brandsList'
    );

    return response;
  }

  async deleteToVerifyLogin() {
    const response = await this.request.delete(
      'https://automationexercise.com/api/verifyLogin'
    );

    return response;
  }

  async assertResponseHas200Code(response: APIResponse) {
    await test.step(`Verify that the responce has 200 code`, async() => {
      expect(response.status()).toBe(200);
    })
  }

  async assertResponseHas405Code(response: APIResponse) {
    await test.step(`Verify that the responce has 405 code`, async() => {
      const body = await response.json();
      expect(body.responseCode).toBe(405);
    }); 
  }

  async assertResponseMessage(response: APIResponse) {
    await test.step(`Verify that the responce has the "This request method is not supported." message`, async() => {
      const body = await response.json();
      expect(body.message).toBe("This request method is not supported.");
    }); 
  }

  async assertResponseBodyToHaveProperty(response: APIResponse, property: string) {
    await test.step(`Verify that the responce has "products" property`, async() => {
      const body = await response.json();
      expect(body).toHaveProperty(property);
    })
  }


}