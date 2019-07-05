import { TestBed } from '@angular/core/testing';

import { RegistServiceService } from './regist-service.service';

describe('RegistServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistServiceService = TestBed.get(RegistServiceService);
    expect(service).toBeTruthy();
  });
});
