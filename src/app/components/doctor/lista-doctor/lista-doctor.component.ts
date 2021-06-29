import { DoctorServiceService } from './../../../services/doctor-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-lista-doctor',
  templateUrl: './lista-doctor.component.html',
  styleUrls: ['./lista-doctor.component.css']
})
export class ListaDoctorComponent implements OnInit {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid?: DxDataGridComponent;
    applyFilterTypes: any;
    currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;

  doctores:Doctor[] = [];
  constructor(private doctorService:DoctorServiceService, private router:Router) { 
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
    this.doctorService.listDoctor()
    .subscribe(data => {
      this.doctores = data;
      console.log(data)
    })
  }

  Editar(e:any){
    if(e.rowType === "data") {
      if (this.dataGrid != undefined)
      var id = this.dataGrid.instance.getKeyByRowIndex(e.rowIndex)
      console.log(id)
      localStorage.setItem("id", id.toString());
      this.router.navigate(["editar"])
    }
  }

}
