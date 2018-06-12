import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectButtonViewComponent } from './select-button-view.component';

describe('SelectButtonViewComponent', () => {
  let component: SelectButtonViewComponent;
  let fixture: ComponentFixture<SelectButtonViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectButtonViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectButtonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
