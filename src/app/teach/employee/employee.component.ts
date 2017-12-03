import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   employees = [
     {name:"Krishna", position:"CEO", salary:"$500"}
   ];
   model:any={};
   model2: any={};
   myValue;
   msg:any="";
   constructor() { }

  ngOnInit() {
  }
  addEmployee(){
      this.employees.push(this.model);
      this.model={};
      this.msg = "Record is successfully added";
  }
  deleteEmployee(i){
    this.employees.splice(i,1);
    this.msg = "Record is successfully deleted";
  }
  editEmployee(k){
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.model2.salary = this.employees[k].salary;
    this.myValue = k;
  }
  updateEmployee(){
    let k= this.myValue;
    for(let i =0; i<this.employees.length; i++){
     if(i==k){
       this.employees[i]= this.model2;
       this.model2 = {};
       this.msg = "Record is successfully updated";
     }
    }
  }
  clickMe(){
     this.msg="";
  }
}
