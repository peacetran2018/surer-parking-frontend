import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurerSignupComponent } from './surer-signup.component';

describe('SurerSignupComponent', () => {
  let component: SurerSignupComponent;
  let fixture: ComponentFixture<SurerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurerSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
