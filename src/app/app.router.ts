import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";
import { TrainingComponent } from "./training/training.component"
import {provideRoutes} from "@angular/router";


const appRoute: Routes = [
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path: 'training',
    component: TrainingComponent
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
