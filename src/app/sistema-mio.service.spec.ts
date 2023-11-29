import { TestBed } from '@angular/core/testing';

import { SistemaMioService } from './sistema-mio.service';

describe('SistemaMioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SistemaMioService = TestBed.get(SistemaMioService);
    expect(service).toBeTruthy();
  });
});
