import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurerHeaderComponent } from './surer-header.component';

describe('SurerHeaderComponent', () => {
  let component: SurerHeaderComponent;
  let fixture: ComponentFixture<SurerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
