import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GrowlMasterComponent} from './growl-master.component';

describe('GrowlMasterComponent', () => {
  let component: GrowlMasterComponent;
  let fixture: ComponentFixture<GrowlMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrowlMasterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowlMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
