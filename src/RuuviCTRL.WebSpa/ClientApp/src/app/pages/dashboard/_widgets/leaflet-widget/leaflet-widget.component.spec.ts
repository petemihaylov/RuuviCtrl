import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletWidgetComponent } from './leaflet-widget.component';

describe('LeafletWidgetComponent', () => {
  let component: LeafletWidgetComponent;
  let fixture: ComponentFixture<LeafletWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
