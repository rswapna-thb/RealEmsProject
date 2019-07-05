import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule , routingcomponents} from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";

import {DepartService} from './dscreen/depart.service';
import {RegistServiceService} from './registration/regist-service.service';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { DeptListComponent } from './dept-list/dept-list.component';

import { LeaveModelComponent } from './leave-model/leave-model.component';
import { EmployeeGetByIdComponent } from './employee-get-by-id/employee-get-by-id.component';
@NgModule({
  declarations: [
    AppComponent,routingcomponents, ListEmployeeComponent, DeptListComponent, LeaveModelComponent, EmployeeGetByIdComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule,
	
    

  ],
  providers: [DepartService,RegistServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
