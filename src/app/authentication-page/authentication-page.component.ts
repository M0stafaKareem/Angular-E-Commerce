import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-page',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.css',
})
export class AuthenticationPageComponent {
  isRegistered: boolean = false;

  constructor(private router: Router) {
    this.isRegistered = this.router.url == '/login' ? true : false;
  }

  // reactive Sign up form
  fullNameInput = new FormControl('');
  emailInput = new FormControl('');
  telInput = new FormControl('');
  passwordInput = new FormControl('');
  signUpClickHandler(event: Event) {
    event.preventDefault();
    console.log(this.fullNameInput.value);
    console.log(this.telInput.value);
    console.log(this.emailInput.value);
    console.log(this.passwordInput.value);
    this.fullNameInput.reset();
    this.telInput.reset();
    this.emailInput.reset();
    this.passwordInput.reset();
  }

  // template driven Login form
  loginEmail: string = '';
  loginPassword: string = '';
  loginClickHandler() {
    console.log(this.loginEmail);
    console.log(this.loginPassword);
  }
}
