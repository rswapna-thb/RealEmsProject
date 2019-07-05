import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGetByIdComponent } from './employee-get-by-id.component';

describe('EmployeeGetByIdComponent', () => {
  let component: EmployeeGetByIdComponent;
  let fixture: ComponentFixture<EmployeeGetByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeGetByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeGetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
