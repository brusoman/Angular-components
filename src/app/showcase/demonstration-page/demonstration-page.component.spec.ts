import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DemonstrationPageComponent} from './demonstration-page.component';

describe('DemonstrationPageComponent', () => {
  let component: DemonstrationPageComponent;
  let fixture: ComponentFixture<DemonstrationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemonstrationPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonstrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
