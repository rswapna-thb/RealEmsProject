import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Employee} from '../registration/models/emp.model'
import {LeaveModel} from '../models/leave.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class RegistServiceService {
private empUrl = 'http://localhost:8080/employee/add';
  constructor(private http:HttpClient) { }
   public createEmp(emp) {
    return this.http.post<Employee>(this.empUrl,emp);
  }
public getUsers() {
    return this.http.get<Employee[]>('http://localhost:8080/employee/list');
  }

  public createlog(emp) {//
    return this.http.get<Employee>('http://localhost:8080/employee/login',{
		params:{email:emp.email,crtPassword:emp.crtPassword}}
	
    );
  }
  public createLeave(leave){
 return this.http.post<LeaveModel>('http://localhost:8080/employee/'+"leave",leave);
  }

  getEmployeeById(registration){
return this.http.get<Employee>(''+ registration);
}

updateEmployee(registration){
return this.http.put<Employee>('',registration);
}
// public setter(registration:EmployeeModel){
// this.registration=registration;
//}
}
