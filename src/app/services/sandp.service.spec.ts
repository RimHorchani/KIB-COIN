import { TestBed } from '@angular/core/testing';

import { SandpService } from './sandp.service';

describe('SandpService', () => {
  let service: SandpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
