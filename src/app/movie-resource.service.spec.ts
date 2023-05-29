import { TestBed } from '@angular/core/testing';

import { MovieResourceService } from './movie-resource.service';

describe('MovieResourceService', () => {
  let service: MovieResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
