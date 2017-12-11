import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import * as firebase from 'firebase';

@Injectable()
export class UserServiceService implements CanActivate{
  userLoggedIn: boolean = false;
  loggedInUser: string;
  authUser: any;
  constructor( private router: Router ) {
    firebase.initializeApp({
      apiKey: "AIzaSyA4PdguUm9yvyF2mrCWcMdeE8MyE-YjdoA",
      authDomain: "angular-2a612.firebaseapp.com",
      databaseURL: "https://angular-2a612.firebaseio.com",
      projectId: "angular-2a612",
      storageBucket: "angular-2a612.appspot.com",
      messagingSenderId: "679923385380"
    })
  }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.verifyLogin(url);
   }
   verifyLogin(url: string):boolean{
    if(this.userLoggedIn){ return true; }
    this.router.navigate(['/signin']);
    return false;
   }
   register(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        alert(`${error.message} please Try Again`);
      });
   }
   verifyUser(){
     this.authUser = firebase.auth().currentUser;

     if(this.authUser){
       alert(`welcome ${this.authUser.email}`);
       this.loggedInUser = this.authUser.email;
       this.userLoggedIn = true;
       this.router.navigate(['/cart']);
     }
   }
   login(loginEmail: string, loginPassword: string){
     firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
       .catch(function (error) {
         alert(`${error.message} Unable to login`);
       });
   }
   logout(){
     this.userLoggedIn = false;
     firebase.auth().signOut().then(function () {
       alert('Logged out');
     }, function (error) {
       alert(`${error.message} Unable to logout`);
     });
   }
}
