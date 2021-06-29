import { PacienteServiceService } from './../../../services/paciente-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/Paciente';
import { Consulta } from 'src/app/models/consulta';
import { ConsultaServiceService } from 'src/app/services/consulta-service.service';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'app-paciente-listar',
  templateUrl: './paciente-listar.component.html',
  styleUrls: ['./paciente-listar.component.css']
})
export class PacienteListarComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid?: DxDataGridComponent;
    applyFilterTypes: any;
    currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;

  stylingMode = "underlined";
  pacientes:Paciente[] = [];
  consultas: Consulta[]= [];
  tasksDataSourceStorage: any;
  constructor(private router:Router, private pacienteService:PacienteServiceService, 
    private consultaService:ConsultaServiceService) {
    this.tasksDataSourceStorage = [];
    this.showFilterRow = true;
    this.showHeaderFilter = true;
    this.applyFilterTypes = [{
        key: "auto",
        name: "Immediately"
    }, {
        key: "onClick",
        name: "On Button Click"
    }];
   }

  ngOnInit(): void {
    this.pacienteService.getPacientes()
    .subscribe(data => {
      this.pacientes = data;
      console.log(this.pacientes)
    })

    this.consultaService.getConsultas()
    .subscribe(data => {
      this.consultas = data;
      console.log(this.consultas)
    })
  }

  getTasks(key:any) {
    let item = this.tasksDataSourceStorage.find((i:any) => i.key === key);
    if (!item) {
        item = {
            key: key,
            dataSourceInstance: new DataSource({
                store: new ArrayStore({
                    data: this.consultas,
                    key: "id"
                }),
                filter: ["paciente.id", "=", key]
            })
        };
        this.tasksDataSourceStorage.push(item)
    }
    return item.dataSourceInstance;
  }

  Editar(e:any){
    if(e.rowType === "data") {
      if(this.dataGrid != undefined)
      var id = this.dataGrid.instance.getKeyByRowIndex(e.rowIndex)
      console.log(id)
      localStorage.setItem("id", id.toString());
      this.router.navigate(["editarpac"])
    }
  }

}
