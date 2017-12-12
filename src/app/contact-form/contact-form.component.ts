import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  nameText: string;
  compText: string;
  emailText: string;
  messText: string;
  onReplyor: boolean = true;
  sendOr: string = "Send";
  Hel = [];



  constructor( private router:Router) {

  }

  ngOnInit() {

  }

 addContact($event){
   this.Hel.push(this.nameText,this.compText, this.emailText, this.messText);
   this.nameText='';
   this.onReplyor = false;

   if(this.sendOr === "Send"){
     this.sendOr = "Submit";
   }else{
     this.sendOr = "Send";
   }
 }
  Reset(){
    this.nameText= '';
  }
}
