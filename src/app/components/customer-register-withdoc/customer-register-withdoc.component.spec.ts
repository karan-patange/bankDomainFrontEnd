import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegisterWithdocComponent } from './customer-register-withdoc.component';

describe('CustomerRegisterWithdocComponent', () => {
  let component: CustomerRegisterWithdocComponent;
  let fixture: ComponentFixture<CustomerRegisterWithdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRegisterWithdocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRegisterWithdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
