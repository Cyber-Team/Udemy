import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public form: FormGroup;
  signin: string = "SignIn";
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

  }
  SignChange(){
    if(this.signin === 'SignIn'){
      this.signin = 'Please SignIn';
    }else{
      this.signin = 'SignIn';
    }
  }

  login(){
    const inputValue = this.form.value;
    console.log(inputValue.email, inputValue.password);
  }
}
