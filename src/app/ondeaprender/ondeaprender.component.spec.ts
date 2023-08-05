import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndeaprenderComponent } from './ondeaprender.component';

describe('OndeaprenderComponent', () => {
  let component: OndeaprenderComponent;
  let fixture: ComponentFixture<OndeaprenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OndeaprenderComponent]
    });
    fixture = TestBed.createComponent(OndeaprenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
