import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUp: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService:AuthService,
     private router: Router) {
  }

  ngOnInit() {
    this.intSignUp();
  }
  intSignUp() {
    this.signUp = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  SavesignUp() {
    const email= this.signUp.get('email').value;
    const password= this.signUp.get('password').value;
    this.authService.signUp(email, password);
    this.router.navigate(['add-profile']);
  }

}
