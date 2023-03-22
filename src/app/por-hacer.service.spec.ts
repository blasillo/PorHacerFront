import { TestBed } from '@angular/core/testing';

import { PorHacerService } from './por-hacer.service';

describe('PorHacerService', () => {
  let service: PorHacerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorHacerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
