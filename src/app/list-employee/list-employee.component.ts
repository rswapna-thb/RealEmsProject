import { Component, OnInit } from '@angular/core';
import {RegistServiceService} from '../registration/regist-service.service';
import {Router} from '@angular/router';
import {Employee} from '../registration/models/emp.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
	employee:Employee[];
  constructor(private router:Router,private regservice: RegistServiceService) { }
  ngOnInit() {
	  this.regservice.getUsers()
      .subscribe( data => {
        this.employee = data;
      });
  }

}
