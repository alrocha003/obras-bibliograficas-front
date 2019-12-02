import { TestBed } from '@angular/core/testing';

import { ObrasBibliograficasService } from './obras-bibliograficas.service';

describe('ObrasBibliograficasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObrasBibliograficasService = TestBed.get(ObrasBibliograficasService);
    expect(service).toBeTruthy();
  });
});
