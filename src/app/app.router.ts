import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from "./contact/contact.component";
import { TrainingComponent } from "./training/training.component";
import { ServicesComponent } from './footer/services/services.component';
import { MobileComponent } from './mobile/mobile.component';
import { CourseComponent} from './course/course.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { SignupComponent } from './Admin/signup/signup.component';
import { SigninComponent } from './Admin/signin/signin.component';
import { FeaturesComponent } from './footer/features/features.component';
import { ForgetComponent } from './Admin/forget/forget.component';
import { TeachComponent } from './teach/teach.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';

const appRoute: Routes = [
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path:'about',
    component: AboutComponent,
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
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'mobile',
    component: MobileComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path: 'course/:id',
    component: CourseDetailsComponent
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
    path: 'features',
    component: FeaturesComponent,
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
