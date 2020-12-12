import { TestBed } from '@angular/core/testing';

import { BreakpService } from './breakp.service';

describe('BreakpService', () => {
  let service: BreakpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
