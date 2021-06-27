import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurerMainLoginComponent } from './surer-main-login.component';

describe('SurerMainLoginComponent', () => {
  let component: SurerMainLoginComponent;
  let fixture: ComponentFixture<SurerMainLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurerMainLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurerMainLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
