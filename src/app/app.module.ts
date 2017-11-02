import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations';



const appRoute: Routes = [
];

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpModule, RouterModule.forRoot(appRoute, { useHash: true}), FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

