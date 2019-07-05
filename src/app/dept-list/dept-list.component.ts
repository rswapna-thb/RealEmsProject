import { Component, OnInit } from '@angular/core';
import {DepartService} from '../dscreen/depart.service';
import {Router} from '@angular/router';

import {Depart} from '../models/depart.model';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {
deprt:Depart[];
  constructor(private router:Router,private departService:DepartService) { }

  ngOnInit() {
	  this.departService.getDeptlist()
      .subscribe( data => {
        this.deprt = data;
      });
  }
    deleteDepart(d: Depart): void {
    this.departService.deleteDeprtList(d)
      .subscribe( data => {
        this.deprt = this.deprt.filter(u => u !== d);
      })
  };

}
