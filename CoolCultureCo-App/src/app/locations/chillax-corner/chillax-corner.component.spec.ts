import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChillaxCornerComponent } from './chillax-corner.component';

describe('ChillaxCornerComponent', () => {
  let component: ChillaxCornerComponent;
  let fixture: ComponentFixture<ChillaxCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChillaxCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChillaxCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
