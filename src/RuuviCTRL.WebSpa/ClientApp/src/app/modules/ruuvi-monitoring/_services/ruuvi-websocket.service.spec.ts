import { TestBed } from '@angular/core/testing';

import { RuuviWebsocketService } from './ruuvi-websocket.service';

describe('RuuviWebsocketService', () => {
  let service: RuuviWebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuuviWebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
