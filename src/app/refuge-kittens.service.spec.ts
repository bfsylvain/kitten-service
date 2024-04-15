import { TestBed } from '@angular/core/testing';

import { RefugeKittensService } from './refuge-kittens.service';

describe('RefugeKittensService', () => {
  let service: RefugeKittensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefugeKittensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
