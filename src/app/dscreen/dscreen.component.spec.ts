import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DscreenComponent } from './dscreen.component';

describe('DscreenComponent', () => {
  let component: DscreenComponent;
  let fixture: ComponentFixture<DscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
