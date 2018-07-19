import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GrowlItemComponent} from './growl-item.component';

describe('GrowlItemComponent', () => {
  let component: GrowlItemComponent;
  let fixture: ComponentFixture<GrowlItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrowlItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowlItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
