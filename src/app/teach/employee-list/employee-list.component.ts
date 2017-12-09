import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

 @Input() model2: any={};
 @Output() notify: EventEmitter<any> = new EventEmitter();

  updateEmployee(): void{
    this.notify.emit(this.model2);
  }
  constructor() { }

  ngOnInit() {

  }

}
