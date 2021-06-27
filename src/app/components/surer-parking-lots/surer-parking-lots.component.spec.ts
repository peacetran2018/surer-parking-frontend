import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurerParkingLotsComponent } from './surer-parking-lots.component';

describe('SurerParkingLotsComponent', () => {
  let component: SurerParkingLotsComponent;
  let fixture: ComponentFixture<SurerParkingLotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurerParkingLotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurerParkingLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
