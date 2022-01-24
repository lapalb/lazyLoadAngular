import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildModule2Component } from './child-module2.component';

describe('ChildModule2Component', () => {
  let component: ChildModule2Component;
  let fixture: ComponentFixture<ChildModule2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildModule2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildModule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
