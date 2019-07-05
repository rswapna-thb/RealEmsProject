import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Depart} from '../models/depart.model'
import {DepartService}  from '../dscreen/depart.service'



@Component({
  selector: 'app-dscreen',
  templateUrl: './dscreen.component.html',
  styleUrls: ['./dscreen.component.css']
})
export class DscreenComponent implements OnInit {
  //model:any={}
  depart:Depart = new Depart();
  constructor(private router: Router,private departservice:DepartService) { }

  ngOnInit() {
  }
  createDepart(): void {
    this.departservice.createDpartSer(this.depart)
    .subscribe( data => {
      alert("department created successfully.");
    });
  }
}
