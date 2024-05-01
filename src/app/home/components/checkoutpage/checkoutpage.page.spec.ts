import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutpagePage } from './checkoutpage.page';

describe('CheckoutpagePage', () => {
  let component: CheckoutpagePage;
  let fixture: ComponentFixture<CheckoutpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CheckoutpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
