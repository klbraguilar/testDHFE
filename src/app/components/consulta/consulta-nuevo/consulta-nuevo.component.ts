import { Component, OnInit, ViewChild } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { DxSelectBoxComponent} from 'devextreme-angular';
import validationEngine from 'devextreme/ui/validation_engine';
import { Consulta } from 'src/app/models/consulta';
import { Paciente } from 'src/app/models/Paciente';
import { Doctor } from 'src/app/models/doctor';
import { Router } from '@angular/router';
import { ConsultaServiceService } from 'src/app/services/consulta-service.service';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';
import { PacienteServiceService } from 'src/app/services/paciente-service.service';
import { FormControl,FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-consulta-nuevo',
  templateUrl: './consulta-nuevo.component.html',
  styleUrls: ['./consulta-nuevo.component.css']
})
export class ConsultaNuevoComponent implements OnInit {
  consultaForm = new FormGroup({
    descripcion : new FormControl('',Validators.required),
    fecha: new FormControl('',Validators.required),
  });
  stylingMode = "underlined";
  consulta: Consulta;
  @ViewChild(DxSelectBoxComponent, { static: false }) dxSelectBox?: DxSelectBoxComponent;
  @ViewChild('selectBoxD') dxSelectBoxD?: DxSelectBoxComponent;
  pacientes: Paciente[] = [];
  doctores: Doctor[] = [];
  slcDoc:string = "";
  constructor(private router:Router, private consultaService:ConsultaServiceService, 
    private doctorService: DoctorServiceService,
    private pacienteService: PacienteServiceService) { }

  ngOnInit(): void {
    this.pacienteService.getPacientes()
    .subscribe(data => {
      this.pacientes = data;
    })

    this.doctorService.listDoctor()
    .subscribe(data => {
      this.doctores = data;
    })

    setTimeout(() => validationEngine.validateGroup());
  }

  onItemClick(){
    if (this.dxSelectBox != undefined)
    var idPac = this.dxSelectBox.selectedItem.id;
    console.log("pac:"+ idPac)
    localStorage.setItem("idPac", idPac.toString());
    console.log("pac:"+ localStorage.getItem("idPac"))
  }

  onItemClickDoctor(){
    if (this.dxSelectBoxD != undefined)
    var idDoc = this.dxSelectBoxD.selectedItem.id;
    console.log("doc"+ idDoc)
    localStorage.setItem("idDoc", idDoc.toString());
    console.log("doc:"+ localStorage.getItem("idDoc"))
  }

  Nuevo(){
    console.log()
    let idPac = localStorage.getItem("idPac");
    let idDoc = localStorage.getItem("idDoc");
    this.consulta = new Consulta(
      this.consultaForm.value.descripcion,
      this.consultaForm.value.fecha
    );
    if (idPac != null && idDoc != null){
      notify('Agregado correctamente.', 'success');
      this.consultaService.createConsulta(+idPac,+idDoc, this.consulta).subscribe(data =>{
        this.router.navigate(["listacon"]);
      })
    }
  }

}
