import { TestBed } from '@angular/core/testing';

import { SlaAssetsServiceService } from './sla-assets.service';

describe('SlaAssetsServiceService', () => {
  let service: SlaAssetsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlaAssetsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
