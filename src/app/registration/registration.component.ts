import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Employee} from '../registration/models/emp.model';
import {RegistServiceService} from '../registration/regist-service.service';

import {NgForm} from '@angular/forms';
import { __rest } from 'tslib';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   empregist:Employee = new Employee();

    textBoxDisabled=true;
  toggle(){
    this.textBoxDisabled = !this.textBoxDisabled;
}


  constructor(private router: Router,private empRegistServ:RegistServiceService) { }

  ngOnInit() {
  }
 createRegis():void{
    this.empRegistServ.createEmp(this.empregist)
    .subscribe( data => {
	  alert("Employee created successfully.");

	});
	//this.empRegistServ.reset();
  }
}
