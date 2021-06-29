import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consulta } from '../models/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaServiceService {

  consultaUrl = 'http://localhost:8080/consulta/';
  constructor(private httpClient: HttpClient) { }

  getConsultas(){
    return this.httpClient.get<Consulta[]>(this.consultaUrl+'lista');
  }

  createConsulta(idPac:number, idDoc:number, consulta:Consulta){
    return this.httpClient.post<Consulta>(this.consultaUrl+"cons/"+idPac+"/"+idDoc, consulta);
  }

  getConsultaId(id:number){
    return this.httpClient.get<Consulta>(this.consultaUrl+id);
  }

  updateConsulta(consulta:Consulta){
    return this.httpClient.put<Consulta>(this.consultaUrl+"update/"+consulta.id, consulta);
  }

  deleteConsulta(consulta:Consulta){
    return this.httpClient.delete<Consulta>(this.consultaUrl+"delete/"+consulta.id)
  }
}
