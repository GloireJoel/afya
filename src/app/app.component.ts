import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afya';
  constructor() {
   // la cle api du prof
    // var firebaseConfig = {
    //  apiKey: "AIzaSyBcKKVcR3M0EqRdCvRzy6hJJHv5lXeMRM0",
    //  authDomain: "afya-ce4e1.firebaseapp.com",
    //  databaseURL: "https://afya-ce4e1.firebaseio.com",
    //  projectId: "afya-ce4e1",
    //  storageBucket: "afya-ce4e1.appspot.com",
    //  messagingSenderId: "1048617219526",
    //  appId: "1:1048617219526:web:51117dfbe331c2bb756ec7",
    //  measurementId: "G-P6Q24M5QTP"

     // ma cle api
     var firebaseConfig = {
      apiKey: "AIzaSyC3FuSXp78d_YNfEqNlNuaZpFKH9c0LVoY",
      authDomain: "afya-b221a.firebaseapp.com",
      databaseURL: "https://afya-b221a.firebaseio.com",
      projectId: "afya-b221a",
      storageBucket: "afya-b221a.appspot.com",
      messagingSenderId: "1081150451497",
      appId: "1:1081150451497:web:1978b54de4f90dd6079138",
      measurementId: "G-2985MKZQGL"
    };
    //Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 };
 
}
