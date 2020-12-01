
import {HttpClient} from '@angular/common/http';
import { Component, OnInit, Input, ViewChild } from '@angular/core';


export class Employee{
  constructor(
    public id: number,
    public name: string,
    public position: string,
    public payment: string,
    public start: string,
    public until: string
  )
  {

  }
}

export  class Position{
  constructor(
    public id: number,
    public name: string
  ){

  }
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})




export class EmployeesComponent implements OnInit {
  employees: Employee[];
  positions: Position[];

  constructor( private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.getEmployes() ;
    this.getPositions();
  }


  // tslint:disable-next-line:typedef
  getEmployes(){
    this.httpClient.get<any>('https://localhost:44300/api').subscribe(response => {
      console.log(response);
      this.employees = response;
    });
  }

  // tslint:disable-next-line:typedef

  selectedOption: any;
  getPosVals(value: any) {
    console.log(value);

    this.httpClient.post('https://localhost:44300/api/add', value).subscribe((res)=>{
      console.warn(res);
        this.getPositions();
    });
  }

  getPositions(){
    this.httpClient.get<any>('https://localhost:44300/api/positions').subscribe(response => {
      this.positions = response;
    } )
  }

  getEmpVals(value: any) {
    value.title = this.selectedOption;
    this.httpClient.post('https://localhost:44300/api/addEmp', value).subscribe((res)=>{
      console.warn(res);

      this.getEmployes();
    });
  }

  openModelEmp() {

  }
}
