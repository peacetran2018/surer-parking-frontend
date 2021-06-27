import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurerProfileComponent } from './surer-profile.component';

describe('SurerProfileComponent', () => {
  let component: SurerProfileComponent;
  let fixture: ComponentFixture<SurerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
