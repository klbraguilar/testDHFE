import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDoctorComponent } from './lista-doctor.component';

describe('ListaDoctorComponent', () => {
  let component: ListaDoctorComponent;
  let fixture: ComponentFixture<ListaDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
