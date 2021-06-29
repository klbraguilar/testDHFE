import { PacienteServiceService } from './../../../services/paciente-service.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/Paciente';
import notify from 'devextreme/ui/notify';
import validationEngine from 'devextreme/ui/validation_engine';
import { FormControl,FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-agregar',
  templateUrl: './paciente-agregar.component.html',
  styleUrls: ['./paciente-agregar.component.css']
})
export class PacienteAgregarComponent implements OnInit {
  
  pacienteForm = new FormGroup({
    nombre : new FormControl('',[Validators.required, Validators.minLength(5)]),
    apellido : new FormControl('',[Validators.required, Validators.minLength(5)]),
    fechaNacimiento: new FormControl('',Validators.required),
    direccion: new FormControl('',[Validators.required, Validators.minLength(2)]),
    telefono: new FormControl('',[
      Validators.required,
      Validators.minLength(7)]),
  });
  stylingMode = "underlined";
  paciente?: Paciente;

  constructor(private router:Router, private pacienteService:PacienteServiceService) {
    
  }

  ngOnInit(): void {
    setTimeout(() => validationEngine.validateGroup());
  }

  Nuevo(){
    this.paciente = new Paciente(
      this.pacienteForm.value.nombre,
      this.pacienteForm.value.apellido,
      this.pacienteForm.value.fechaNacimiento,
      this.pacienteForm.value.direccion,
      this.pacienteForm.value.telefono
    );
    console.log(this.paciente)
    notify('Agregado correctamente.', 'success');
    this.pacienteService.createPaciente(this.paciente).subscribe(data =>{
      this.router.navigate(["lista"]);
    })
  }

}
