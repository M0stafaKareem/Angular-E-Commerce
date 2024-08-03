import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-page',
  standalone: true,
  imports: [],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.css',
})
export class AuthenticationPageComponent {
  isRegistered: boolean = false;
  constructor(private router: Router) {
    this.isRegistered = this.router.url == '/login' ? true : false;
    console.log(this.isRegistered);
  }
}
