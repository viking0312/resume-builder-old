import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate1Component } from './resume-template1.component';

describe('ResumeTemplate1Component', () => {
  let component: ResumeTemplate1Component;
  let fixture: ComponentFixture<ResumeTemplate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeTemplate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTemplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
