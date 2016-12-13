/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeathersApiService } from './feathers-api.service';

describe('FeathersApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeathersApiService]
    });
  });

  it('should ...', inject([FeathersApiService], (service: FeathersApiService) => {
    expect(service).toBeTruthy();
  }));
});
