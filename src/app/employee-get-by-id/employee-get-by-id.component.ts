import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Employee } from '../registration/models/emp.model';
import {RegistServiceService} from '../registration/regist-service.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-employee-get-by-id',
  templateUrl: './employee-get-by-id.component.html',
  styleUrls: ['./employee-get-by-id.component.css']
})
export class EmployeeGetByIdComponent implements OnInit {
	registration:Employee;
  constructor(private router:Router, private empservice:RegistServiceService) { }

  ngOnInit() {
// 	  this.registration =
// this.empservice.getter(this.registration);
  }
updateEmployee(f:NgForm){
this.empservice.updateEmployee(this.registration)
.subscribe(
data =>{
alert("employee data updated successfully");
}
);
}
}
