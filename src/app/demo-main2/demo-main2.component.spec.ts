import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMain2Component } from './demo-main2.component';

describe('DemoMain2Component', () => {
  let component: DemoMain2Component;
  let fixture: ComponentFixture<DemoMain2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoMain2Component]
    });
    fixture = TestBed.createComponent(DemoMain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
