import { PacienteServiceService } from './../../../services/paciente-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/Paciente';
import notify from 'devextreme/ui/notify';
import validationEngine from 'devextreme/ui/validation_engine';
import { FormControl,FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-paciente-editar',
  templateUrl: './paciente-editar.component.html',
  styleUrls: ['./paciente-editar.component.css']
})
export class PacienteEditarComponent implements OnInit {

  pacienteForm = new FormGroup({
    nombre : new FormControl('',[Validators.required, Validators.minLength(5)]),
    apellido : new FormControl('',[Validators.required, Validators.minLength(5)]),
    fechaNacimiento: new FormControl('',Validators.required),
    direccion: new FormControl('',[Validators.required, Validators.minLength(10)]),
    telefono: new FormControl('',[
      Validators.required,
      Validators.minLength(7)]),
  });
  stylingMode = "underlined";
  paciente: Paciente = new Paciente("", "", new Date, "", 111);
  pacientes: Paciente[] = [];
  constructor(private router:Router, private pacienteService:PacienteServiceService) { }

  ngOnInit(): void {
    this.Editar()
    setTimeout(() => validationEngine.validateGroup());
  }

  Editar(){
    let id = localStorage.getItem("id")
    if(id != null){
      this.pacienteService.getPacienteId(+id)
      .subscribe(data =>{
        this.paciente = data
      })
    }
  }

  Actualizar(paciente:Paciente){
    notify('Actualizado correctamente.', 'success');
    this.pacienteService.updatePaciente(paciente)
    .subscribe(data => {
      this.paciente = data
      this.router.navigate(["listapac"])
    })   
  }

  Eliminar(paciente:Paciente){
    return this.pacienteService.deletePaciente(paciente)
    .subscribe(data => {
      notify('Eliminado correctamente', 'success');
      this.router.navigate(["listapac"])
      this.pacientes = this.pacientes.filter(p=>p!==paciente)
    })
  }

}
