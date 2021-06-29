import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoDoctorComponent } from './nuevo-doctor.component';

describe('NuevoDoctorComponent', () => {
  let component: NuevoDoctorComponent;
  let fixture: ComponentFixture<NuevoDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
