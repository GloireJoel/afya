import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   login: string;
  constructor() { }

  signUp(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );

  }

  signIn(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            this.login = email;
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOut(email: string, password: string) {
       firebase.auth().signOut();    
  }
  
}
