import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
/*routing*/
import { AppRoutingModule} from "./app.router";

/*material desing imports*/
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatChipsModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material';

/*components*/
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import {DataService} from "./services/data.service";




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
    TeachComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

