import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesDetailsComponent } from './places-details.component';

describe('PlacesDetailsComponent', () => {
  let component: PlacesDetailsComponent;
  let fixture: ComponentFixture<PlacesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacesDetailsComponent]
    });
    fixture = TestBed.createComponent(PlacesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
