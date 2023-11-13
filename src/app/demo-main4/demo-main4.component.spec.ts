import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMain4Component } from './demo-main4.component';

describe('DemoMain4Component', () => {
  let component: DemoMain4Component;
  let fixture: ComponentFixture<DemoMain4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoMain4Component]
    });
    fixture = TestBed.createComponent(DemoMain4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
