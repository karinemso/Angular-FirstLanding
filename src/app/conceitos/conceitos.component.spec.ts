import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceitosComponent } from './conceitos.component';

describe('ConceitosComponent', () => {
  let component: ConceitosComponent;
  let fixture: ComponentFixture<ConceitosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConceitosComponent]
    });
    fixture = TestBed.createComponent(ConceitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
