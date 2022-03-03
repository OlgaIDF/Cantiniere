import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsManagementComponent } from './ingredients-management.component';

describe('IngredientsManagementComponent', () => {
  let component: IngredientsManagementComponent;
  let fixture: ComponentFixture<IngredientsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
