import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';
import notify from 'devextreme/ui/notify';
import { FormControl,FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-nuevo-doctor',
  templateUrl: './nuevo-doctor.component.html',
  styleUrls: ['./nuevo-doctor.component.css']
})
export class NuevoDoctorComponent implements OnInit {
  doctorForm = new FormGroup({
    nombre : new FormControl('',[Validators.required, Validators.minLength(5)]),
    apellido : new FormControl('',[Validators.required, Validators.minLength(5)]),
    fechaNacimiento: new FormControl('',Validators.required),
    direccion: new FormControl('',[Validators.required, Validators.minLength(2)])
  });
  stylingMode = "underlined";
  doctor?: Doctor;
  constructor(private doctorService:DoctorServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  Nuevo(){
    this.doctor = new Doctor(
      this.doctorForm.value.nombre,
      this.doctorForm.value.apellido,
      this.doctorForm.value.fechaNacimiento,
      this.doctorForm.value.direccion
    );
    console.log(this.doctor)
    notify('Agregado correctamente.', 'success');
    this.doctorService.createDoctor(this.doctor).subscribe(data =>{
      this.router.navigate(["lista"]);
    })
  }

}
