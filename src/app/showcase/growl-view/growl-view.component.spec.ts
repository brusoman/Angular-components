import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GrowlViewComponent} from './growl-view.component';

describe('GrowlViewComponent', () => {
  let component: GrowlViewComponent;
  let fixture: ComponentFixture<GrowlViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrowlViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowlViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
