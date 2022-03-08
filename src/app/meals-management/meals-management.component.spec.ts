import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsManagementComponent } from './meals-management.component';

describe('MealsManagementComponent', () => {
  let component: MealsManagementComponent;
  let fixture: ComponentFixture<MealsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
