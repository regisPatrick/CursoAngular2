import { TestBed } from '@angular/core/testing';

import { BuscaSiteGoogleService } from './busca-site-google.service';

describe('BuscaSiteGoogleService', () => {
  let service: BuscaSiteGoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaSiteGoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
