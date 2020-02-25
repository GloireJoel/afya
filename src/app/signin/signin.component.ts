import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  usersignIn: FormGroup;
  constructor(private formBuilder: FormBuilder,
     private authService:AuthService,
     private router: Router) { }

  ngOnInit()
   {
     this.signIn();
  }
   signIn()
   {
      this.usersignIn = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]], 
    });
   }
   connexion()
  {
    const email= this.usersignIn.get('email').value;
    const password= this.usersignIn.get('password').value;
    this.authService.signIn(email, password);
    this.router.navigate(['add_cas']);
  }
}
