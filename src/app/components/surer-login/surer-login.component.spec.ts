import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurerLoginComponent } from './surer-login.component';

describe('SurerLoginComponent', () => {
  let component: SurerLoginComponent;
  let fixture: ComponentFixture<SurerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
