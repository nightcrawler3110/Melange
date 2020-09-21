import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulCheckoutPageComponent } from './successful-checkout-page.component';

describe('SuccessfulCheckoutPageComponent', () => {
  let component: SuccessfulCheckoutPageComponent;
  let fixture: ComponentFixture<SuccessfulCheckoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulCheckoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulCheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
