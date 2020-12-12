import { TestBed } from '@angular/core/testing';

import { PizzapService } from './pizzap.service';

describe('PizzapService', () => {
  let service: PizzapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
