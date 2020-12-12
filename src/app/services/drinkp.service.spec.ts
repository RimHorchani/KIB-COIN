import { TestBed } from '@angular/core/testing';

import { DrinkpService } from './drinkp.service';

describe('DrinkpService', () => {
  let service: DrinkpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
