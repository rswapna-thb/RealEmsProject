import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { RegistrationComponent } from './registration/registration.component';
import { DscreenComponent } from './dscreen/dscreen.component';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {DeptListComponent} from './dept-list/dept-list.component';
import {LeaveModelComponent} from './leave-model/leave-model.component';




const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'fpassword',component:FpasswordComponent
  },
  {
    path:'registration', component:RegistrationComponent
  },
  {
    path:'dscreen', component:DscreenComponent
  },
  {path:'list-employee',component:ListEmployeeComponent},
  {path:'dept-list',component: DeptListComponent},
  {path:'leave-model',component:LeaveModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [LoginComponent,FpasswordComponent,RegistrationComponent,DscreenComponent]
