import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolCultureCornerComponent } from './cool-culture-corner.component';

describe('CoolCultureCornerComponent', () => {
  let component: CoolCultureCornerComponent;
  let fixture: ComponentFixture<CoolCultureCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolCultureCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolCultureCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
