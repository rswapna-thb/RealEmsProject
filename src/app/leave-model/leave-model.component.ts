import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {RegistServiceService} from '../registration/regist-service.service';

import {LeaveModel} from '../models/leave.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-leave-model',
  templateUrl: './leave-model.component.html',
  styleUrls: ['./leave-model.component.css']
})
export class LeaveModelComponent implements OnInit {
leavModel:LeaveModel=new LeaveModel();
  constructor(private router: Router,private registLeave:RegistServiceService) { }

  ngOnInit() {
  }

hiddenTable=true;
  toggle(){
    this.hiddenTable=!this.hiddenTable;
  }



leaveInsert():void{
this.registLeave.createLeave(this.leavModel)
   .subscribe( data => {
	  alert("created successfully.");

	});




}
}
