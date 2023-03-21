import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationQuestionsComponent } from './authentication-questions.component';

describe('AuthenticationQuestionsComponent', () => {
  let component: AuthenticationQuestionsComponent;
  let fixture: ComponentFixture<AuthenticationQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
