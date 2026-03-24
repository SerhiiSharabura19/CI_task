import { APIMethods } from '../pages/APImethods';
import { APIRequestContext } from '@playwright/test';

export class APImanager {
  readonly apiMethods: APIMethods;

  constructor(request: APIRequestContext) {
    this.apiMethods = new APIMethods(request);
  }
}
