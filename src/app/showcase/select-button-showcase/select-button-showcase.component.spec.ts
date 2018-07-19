import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectButtonShowcaseComponent} from './select-button-showcase.component';

describe('SelectButtonShowcaseComponent', () => {
  let component: SelectButtonShowcaseComponent;
  let fixture: ComponentFixture<SelectButtonShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectButtonShowcaseComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectButtonShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
