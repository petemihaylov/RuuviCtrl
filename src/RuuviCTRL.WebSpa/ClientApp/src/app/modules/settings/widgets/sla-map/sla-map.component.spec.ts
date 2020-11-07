import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaMapComponent } from './sla-map.component';

describe('SlaMapComponent', () => {
  let component: SlaMapComponent;
  let fixture: ComponentFixture<SlaMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
