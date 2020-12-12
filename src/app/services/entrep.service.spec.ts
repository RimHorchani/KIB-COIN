import { TestBed } from '@angular/core/testing';

import { EntrepService } from './entrep.service';

describe('EntrepService', () => {
  let service: EntrepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
