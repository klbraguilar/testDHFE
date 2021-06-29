import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaDoctorComponent } from './components/doctor/lista-doctor/lista-doctor.component';
import { EditarDoctorComponent } from './components/doctor/editar-doctor/editar-doctor.component';
import { NuevoDoctorComponent } from './components/doctor/nuevo-doctor/nuevo-doctor.component';
import {DoctorServiceService} from './services/doctor-service.service';
import {PacienteServiceService} from './services/paciente-service.service';
import {ConsultaServiceService} from './services/consulta-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { DetalleDoctorComponent } from './components/doctor/detalle-doctor/detalle-doctor.component';

import { DxButtonModule } from 'devextreme-angular/ui/button';
import { 
  DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxTextBoxModule,
  DxDateBoxModule,
  DxValidatorModule,
  DxNumberBoxModule
} from 'devextreme-angular';
import { PacienteAgregarComponent } from './components/paciente/paciente-agregar/paciente-agregar.component';
import { PacienteListarComponent } from './components/paciente/paciente-listar/paciente-listar.component';
import { PacienteEditarComponent } from './components/paciente/paciente-editar/paciente-editar.component';
import { ConsultaListaComponent } from './components/consulta/consulta-lista/consulta-lista.component';
import { ConsultaNuevoComponent } from './components/consulta/consulta-nuevo/consulta-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDoctorComponent,
    EditarDoctorComponent,
    NuevoDoctorComponent,
    DetalleDoctorComponent,
    PacienteAgregarComponent,
    PacienteListarComponent,
    PacienteEditarComponent,
    ConsultaListaComponent,
    ConsultaNuevoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DxButtonModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    FormsModule,
    HttpClientModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxValidatorModule,
    DxNumberBoxModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [DoctorServiceService,PacienteServiceService,ConsultaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
