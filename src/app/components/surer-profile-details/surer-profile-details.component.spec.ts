import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurerProfileDetailsComponent } from './surer-profile-details.component';

describe('SurerProfileDetailsComponent', () => {
  let component: SurerProfileDetailsComponent;
  let fixture: ComponentFixture<SurerProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurerProfileDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurerProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
