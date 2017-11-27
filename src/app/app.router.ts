import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";
import { TrainingComponent } from "./training/training.component";
import {HomeComponent} from "./home/home.component";
import {MobileComponent } from './mobile/mobile.component';
import {JavascriptComponent} from './javascript/javascript.component';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {ForgetComponent} from './forget/forget.component';
import {TeachComponent} from './teach/teach.component';
import {BlogComponent} from './blog/blog.component';
import {CartComponent} from './cart/cart.component';
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
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path:'forget',
    component: ForgetComponent,
  },
  {
    path:'teach',
    component: TeachComponent,
  },
  {
    path:'blog',
    component: BlogComponent,
  },
  {
    path:'cart',
    component: CartComponent,
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
