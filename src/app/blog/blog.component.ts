import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  myBlog:any;
  itemCount:number;
  btnText: string = "Add";
  goatText: string = "";
  goatName: string = "";
  goals = [];
  name = [];
  onRe: string = "Reply";
  onReplyor: boolean = false;

  goatImg: string;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('../assets/json/blog.json')
      .map(response => response.json())
      .subscribe(res => this.myBlog = res);

    this.itemCount = this.goals.length;
  }
  onReset(){
    this.goatName = '';
    this.goatText = '';
  }
  addComment(){
      this.goals.push(this.goatText);
      this.goatText='';
      this.itemCount = this.goals.length;
      this.name.push(this.goatName);
      this.goatName='';
  }
  onDelte(i){
    this.name.splice(i, 1);
   // this.goals.splice(i, this.goals.length);
   // this.goals.length = --i;   degrement counter for comments
    this.goals.splice(i, this.goals.length);
    this.itemCount --;
  }
  onReply(){
    this.onReplyor = true;
    if(this.onRe === 'Reply'){
      this.onRe = 'Remove';
    }else {
      this.onRe = 'Reply';
      this.onReplyor = false;
    }
  }
}
