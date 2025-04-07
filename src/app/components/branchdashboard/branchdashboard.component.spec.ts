import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchdashboardComponent } from './branchdashboard.component';

describe('BranchdashboardComponent', () => {
  let component: BranchdashboardComponent;
  let fixture: ComponentFixture<BranchdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
