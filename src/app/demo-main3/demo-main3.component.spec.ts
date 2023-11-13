import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMain3Component } from './demo-main3.component';

describe('DemoMain3Component', () => {
  let component: DemoMain3Component;
  let fixture: ComponentFixture<DemoMain3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoMain3Component]
    });
    fixture = TestBed.createComponent(DemoMain3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
