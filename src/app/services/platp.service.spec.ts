import { TestBed } from '@angular/core/testing';

import { PlatpService } from './platp.service';

describe('PlatpService', () => {
  let service: PlatpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
