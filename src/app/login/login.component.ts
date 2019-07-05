import { Component, OnInit } from '@angular/core';
import { Employee } from '../registration/models/emp.model';
import {RegistServiceService} from  '../registration/regist-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	emplog:Employee=new Employee();
	//emplog:Employee;
 // model:any={}
  constructor(private regservice:RegistServiceService) { }

  ngOnInit() {
  }
loginUser(): void {
	

  this.regservice.createlog(this.emplog)
      .subscribe( data => {



		// this.emplog=data;
		// alert(this.emplog.email);
//    this.emplog=data;

//    if(this.emplog.email==="" && this.emplog.crtPassword==="")
//   {
// 	 alert("success");
//   }
//   else {alert("unsuccess");}
    
	if(isEmpty(data)) {
     alert("not success");
} else {
    alert("success");
}


    // this.regservice.createlog(this.emplog)
    // .subscribe(data=>{
 });
 function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
  }
}
