import { TestBed } from '@angular/core/testing';

import { TestHttpServiceService } from './test-http-service.service';

describe('TestHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestHttpServiceService = TestBed.get(TestHttpServiceService);
    expect(service).toBeTruthy();
  });
});
