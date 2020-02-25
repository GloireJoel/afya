import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor( private router :Router, private authService : AuthService, ) { }

  canActivate() : Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user){
            resolve(true);
          }
        else{
           this.router.navigate(['/signin']);
           reject(false);
       }
   });
    });
  }
     
}
