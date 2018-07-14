import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GrowlShowcaseComponent} from './growl-showcase.component';

describe('GrowlShowcaseComponent', () => {
  let component: GrowlShowcaseComponent;
  let fixture: ComponentFixture<GrowlShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrowlShowcaseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowlShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
