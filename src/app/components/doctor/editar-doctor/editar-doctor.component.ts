import { Doctor } from './../../../models/doctor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';
import notify from 'devextreme/ui/notify';
import { FormControl,FormGroup, Validators  } from '@angular/forms';
import validationEngine from 'devextreme/ui/validation_engine';

@Component({
  selector: 'app-editar-doctor',
  templateUrl: './editar-doctor.component.html',
  styleUrls: ['./editar-doctor.component.css']
})
export class EditarDoctorComponent implements OnInit {
  stylingMode = "underlined";
  doctorForm = new FormGroup({
    nombre : new FormControl('',[Validators.required, Validators.minLength(5)]),
    apellido : new FormControl('',[Validators.required, Validators.minLength(5)]),
    fechaNacimiento: new FormControl('',Validators.required),
    direccion: new FormControl('',[Validators.required, Validators.minLength(2)])
  });
  doctor: Doctor = new Doctor("","",new Date,"");
  doctores: Doctor[] = [];
  constructor(private router:Router, private doctorService:DoctorServiceService) { }

  ngOnInit(): void {
    this.Editar();
    setTimeout(() => validationEngine.validateGroup());
  }

  Editar(){
    let id = localStorage.getItem("id")
    if(id != null){
      this.doctorService.getDoctorId(+id)
      .subscribe(data =>{
        console.log(data)
        this.doctor = data
      })
    }
  }
  
  Actualizar(doctor:Doctor){
    notify('Actualizado correctamente.', 'success');
    this.doctorService.updateDoctor(doctor)
    .subscribe(data => {
      this.doctor = data
      this.router.navigate(["lista"])
    })   
  }

  Eliminar(doctor:Doctor){
    return this.doctorService.deleteDoctor(doctor)
    .subscribe(data => {
      notify('Eliminado correctamente', 'success');
      this.router.navigate(["lista"])
      this.doctores = this.doctores.filter(p=>p!==doctor)
    })
  }

}
