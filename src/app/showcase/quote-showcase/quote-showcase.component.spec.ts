import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuoteShowcaseComponent} from './quote-showcase.component';

describe('QuoteShowcaseComponent', () => {
  let component: QuoteShowcaseComponent;
  let fixture: ComponentFixture<QuoteShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteShowcaseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
