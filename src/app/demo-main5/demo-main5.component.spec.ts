import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMain5Component } from './demo-main5.component';

describe('DemoMain5Component', () => {
  let component: DemoMain5Component;
  let fixture: ComponentFixture<DemoMain5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoMain5Component]
    });
    fixture = TestBed.createComponent(DemoMain5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
