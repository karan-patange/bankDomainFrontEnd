import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashboardTestingGithubComponent } from './customer-dashboard-testing-github.component';

describe('CustomerDashboardTestingGithubComponent', () => {
  let component: CustomerDashboardTestingGithubComponent;
  let fixture: ComponentFixture<CustomerDashboardTestingGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDashboardTestingGithubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDashboardTestingGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
