import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatternValidator } from '@angular/forms';
/*routing*/
import { AppRoutingModule} from "./app.router";
import {RouterModule, Routes} from '@angular/router';

/*material desing imports*/
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatChipsModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

/*environment setup*/
import {environment} from "../environments/environment";

/*firebase setup*/
/*import { AngularFireModule} from "angularfire2";
import { AngularFireDatabaseModule} from "angularfire2/database-deprecated";*/
/*services*/
import { DataService } from './services/data.service';
import { AuthService } from './services/Auth/auth.service';
import { CartService } from './services/cart/cart.service';

/*pipes*/
import { BloPipe } from './blo.pipe';
import { BlogPipe } from './pipes/blog.pipe';

/*components*/
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TrainingComponent } from './training/training.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgetComponent } from './forget/forget.component';
import { TeachComponent } from './teach/teach.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';

/*sub components*/
import { EmployeeComponent } from './teach/employee/employee.component';
import { EmployeeListComponent } from './teach/employee-list/employee-list.component';
import { ProjectComponent } from './home/project/project.component';
import { FeaturesComponent } from './footer/features/features.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    ContactFormComponent,
    TrainingComponent,
    HomeComponent,
    MobileComponent,
    JavascriptComponent,
    SignupComponent,
    SigninComponent,
    ForgetComponent,
    TeachComponent,
    BlogComponent,
    BloPipe,
    CartComponent,
    EmployeeComponent,
    EmployeeListComponent,
    BlogPipe,
    AboutComponent,
    ProjectComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, MatMenuModule, MatChipsModule, MatInputModule, MatIconModule, MatCardModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    Angular2FontawesomeModule

  ],
  providers: [DataService,AuthService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

