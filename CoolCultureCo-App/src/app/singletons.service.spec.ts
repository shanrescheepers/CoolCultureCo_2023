import { TestBed } from '@angular/core/testing';

import { SingletonsService } from './singletons.service';

describe('SingletonsService', () => {
  let service: SingletonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingletonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
