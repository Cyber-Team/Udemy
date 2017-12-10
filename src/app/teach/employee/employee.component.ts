import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   employees = [
                {
                  id:1,
                  name:"Krishna",
                  position:"CEO",
                  salary:"$500"
                }
   ];
   model:any={};
   model2: any={};
  /*popups*/
   msg:any="";
   msgg:any="";


   constructor() { }

  ngOnInit() {
  }

  onNotify(event){
     for(let i =0; i<this.employees.length; i++){
        if(this.employees[i].id== event.id){
          this.employees[i]= event;
          this.msg = "Record is successfully updated";
        }
     }
  };
  addEmployee(){
      this.model.id = this.employees.length+1;
      this.employees.push(this.model);
      this.model={};
      this.msg = "Record is successfully added";
  }
  deleteEmployee(i){
    this.employees.splice(i,1);
    this.msgg = "Record is successfully deleted";
  }
  editEmployee(k){
    this.model2.id = this.employees[k].id;
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.model2.salary = this.employees[k].salary;
  }
}
