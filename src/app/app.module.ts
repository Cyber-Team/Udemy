import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';


/*material desing imports*/
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';


import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';

// Routing started
const appRoute: Routes = [
  {
    path:'contact',
    component:ContactComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoute, { useHash: true}),
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

