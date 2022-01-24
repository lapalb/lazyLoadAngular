import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildModule1Component } from './child-module1.component';

describe('ChildModule1Component', () => {
  let component: ChildModule1Component;
  let fixture: ComponentFixture<ChildModule1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildModule1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
