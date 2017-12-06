import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

 /* @Input() reviews: string;*/
 @Input() model2: any={};
/* @Output() notify: EventEmitter<string> = new EventEmitter<string>();*/

  /*updateEmployee(): void{
    this.notify.emit('msg');
  }*/
  constructor() { }

  ngOnInit() {

  }

}
