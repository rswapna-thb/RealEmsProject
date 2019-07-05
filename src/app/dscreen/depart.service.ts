import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Depart} from'../models/depart.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DepartService {
  private departUrl = 'http://localhost:8080/Depat';
  constructor(private http:HttpClient) { }

  public createDpartSer(dept) {
    return this.http.post<Depart>(this.departUrl, dept);
  }
  public getDeptlist() {
    return this.http.get<Depart[]>('http://localhost:8080/Depat/list');
  }
  public deleteDeprtList(dept)
  {
	  return this.http.delete(this.departUrl+"/"+dept.id);
  }

}
