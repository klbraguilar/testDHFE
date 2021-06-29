import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';
import { Consulta } from 'src/app/models/consulta';
import { ConsultaServiceService } from 'src/app/services/consulta-service.service';

@Component({
  selector: 'app-consulta-lista',
  templateUrl: './consulta-lista.component.html',
  styleUrls: ['./consulta-lista.component.css']
})
export class ConsultaListaComponent implements OnInit {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid?: DxDataGridComponent;
    applyFilterTypes: any;
    currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;
  consultas: Consulta[] = [];
  constructor(private consultaService:ConsultaServiceService, private router:Router) {
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
    this.consultaService.getConsultas()
    .subscribe(data => {
      this.consultas = data;
      console.log(data)
    })
  }

  Editar(e:any){
    if(e.rowType === "data") {
      if (this.dataGrid != undefined)
      var id = this.dataGrid.instance.getKeyByRowIndex(e.rowIndex)
      console.log(id)
      localStorage.setItem("id", id.toString());
      this.router.navigate(["editarcon"])
    }
  }

}
