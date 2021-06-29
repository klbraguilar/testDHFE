
import { ConsultaNuevoComponent } from './components/consulta/consulta-nuevo/consulta-nuevo.component';
import { ConsultaListaComponent } from './components/consulta/consulta-lista/consulta-lista.component';
import { PacienteEditarComponent } from './components/paciente/paciente-editar/paciente-editar.component';
import { PacienteAgregarComponent } from './components/paciente/paciente-agregar/paciente-agregar.component';
import { PacienteListarComponent } from './components/paciente/paciente-listar/paciente-listar.component';
import { DetalleDoctorComponent } from './components/doctor/detalle-doctor/detalle-doctor.component';
import { NuevoDoctorComponent } from './components/doctor/nuevo-doctor/nuevo-doctor.component';
import { ListaDoctorComponent } from './components/doctor/lista-doctor/lista-doctor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarDoctorComponent } from './components/doctor/editar-doctor/editar-doctor.component';

const routes: Routes = [
  {path: '',   redirectTo: 'lista', pathMatch: 'full'},
  {path: 'lista', component:ListaDoctorComponent},
  {path: 'agregar', component:NuevoDoctorComponent},
  {path: 'editar', component:EditarDoctorComponent},

  {path: 'listapac', component:PacienteListarComponent},
  {path: 'agregarpac', component:PacienteAgregarComponent},
  {path: 'editarpac', component:PacienteEditarComponent},

  {path: 'listacon', component:ConsultaListaComponent},
  {path: 'agregarcon', component:ConsultaNuevoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
