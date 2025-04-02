import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchEmployeeDashboardComponent } from './branch-employee-dashboard.component';

describe('BranchEmployeeDashboardComponent', () => {
  let component: BranchEmployeeDashboardComponent;
  let fixture: ComponentFixture<BranchEmployeeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchEmployeeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchEmployeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
