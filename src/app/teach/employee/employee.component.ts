import { Component, OnInit, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  animations: [
    trigger('myTrigger',[
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.4)'
      })),
      state('fadeIn', style({opacity: '1'})),
      transition('void => *',[
        animate(500, keyframes([
          style({opacity:0, transform: 'translateY(-30px)', offset: 0}),
          style({opacity:1, transform: 'translateY(5px)', offset: .3}),
          style({opacity:1, transform: 'translateY(0)', offset: 1}),
        ]))
      ])
    ])
  ]
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
   state: string = 'fadeIn';
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
     // this.state = (this.state === 'small' ? 'large' : 'small');
      this.state = "fadeIn";
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
