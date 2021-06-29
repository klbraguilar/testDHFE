import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../models/Paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteServiceService {
  pacienteUrl = 'http://localhost:8080/paciente/';
  constructor(private httpClient: HttpClient) { }

  getPacientes(){
    return this.httpClient.get<Paciente[]>(this.pacienteUrl + 'lista');
  }

  createPaciente(paciente:Paciente){
    return this.httpClient.post<Paciente>(this.pacienteUrl + 'create', paciente);
  }

  getPacienteId(id:number){
    return this.httpClient.get<Paciente>(this.pacienteUrl+id);
  }

  updatePaciente(paciente:Paciente){
    return this.httpClient.put<Paciente>(this.pacienteUrl+'update/'+paciente.id, paciente);
  }

  deletePaciente(paciente:Paciente){
    return this.httpClient.delete<Paciente>(this.pacienteUrl+'delete/'+paciente.id)
  }
}
