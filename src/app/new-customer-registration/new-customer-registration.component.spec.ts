import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerRegistrationComponent } from './new-customer-registration.component';

describe('NewCustomerRegistrationComponent', () => {
  let component: NewCustomerRegistrationComponent;
  let fixture: ComponentFixture<NewCustomerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCustomerRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCustomerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
