import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanillaVillaComponent } from './vanilla-villa.component';

describe('VanillaVillaComponent', () => {
  let component: VanillaVillaComponent;
  let fixture: ComponentFixture<VanillaVillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanillaVillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanillaVillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
