import { TestBed } from '@angular/core/testing';

import { RotasService } from './rotas.service';

describe('RotasService', () => {
  let service: RotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
