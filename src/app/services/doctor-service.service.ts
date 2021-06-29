import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  doctorUrl = 'http://localhost:8080/doctores/';

  constructor(private httpClient: HttpClient) { 

  }

  public listDoctor(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(this.doctorUrl + 'lista');
  }

  public createDoctor(doctor:Doctor) {
    return this.httpClient.post<Doctor>(this.doctorUrl + 'create', doctor);
  }

  public getDoctorId(id:number): Observable<Doctor>{
    return this.httpClient.get<Doctor>(this.doctorUrl+id);
  }

  updateDoctor(doctor:Doctor){
    return this.httpClient.put<Doctor>(this.doctorUrl+'update/'+doctor.id, doctor);
  }

  deleteDoctor(doctor:Doctor){
    return this.httpClient.delete<Doctor>(this.doctorUrl+'delete/'+doctor.id)
  }

}
