import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";
import { TrainingComponent } from "./training/training.component";
import {HomeComponent} from "./home/home.component";
import {MobileComponent } from './mobile/mobile.component';
import {JavascriptComponent} from './javascript/javascript.component';
import {provideRoutes} from "@angular/router";


const appRoute: Routes = [
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  {
    path: 'training',
    component: TrainingComponent,
  },
  {
    path: 'mobile',
    component: MobileComponent,
  },
  {
    path: 'javascript',
    component: JavascriptComponent,
  },
  {
    path: '',
    component: HomeComponent,
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute, { useHash: true}),
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule{}
