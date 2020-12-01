import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SlaAssetsService } from './sla-assets.service';

describe('SlaAssetsService', () => {
  let service: SlaAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({   imports:[HttpClientTestingModule ],});
    service = TestBed.inject(SlaAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
