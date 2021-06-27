import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurerMainComponent } from './surer-main.component';

describe('SurerMainComponent', () => {
  let component: SurerMainComponent;
  let fixture: ComponentFixture<SurerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurerMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
