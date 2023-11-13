import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMainComponent } from './demoMainComponent';

describe('DemoMainComponent', () => {
  let component: DemoMainComponent;
  let fixture: ComponentFixture<DemoMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoMainComponent]
    });
    fixture = TestBed.createComponent(DemoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
