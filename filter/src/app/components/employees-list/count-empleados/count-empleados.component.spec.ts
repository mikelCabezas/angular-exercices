import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEmpleadosComponent } from './count-empleados.component';

describe('CountEmpleadosComponent', () => {
  let component: CountEmpleadosComponent;
  let fixture: ComponentFixture<CountEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountEmpleadosComponent]
    });
    fixture = TestBed.createComponent(CountEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
