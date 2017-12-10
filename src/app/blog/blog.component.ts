import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { BlogInterface } from '../Interfaces/blog-interface'
import { BlogPipe } from '../pipes/blog.pipe';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  myBlog:BlogInterface[];
  itemCount:number;
  btnText: string = "Add";
  goatText: string = "";
  goatName: string = "";
  goals = [];
  name = [];
  onRe: string = "Reply";
  onReplyor: boolean = false;
 search: string;
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
