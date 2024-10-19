import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogin = true;

  username: string = '';
  password: string = '';

  signupUsername: string = '';
  signupEmail: string = '';
  signupPassword: string = '';
  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('welcome back'+' '+this.username); 
      this.router.navigate(['/dashboard']);
    }
    
  }

  onSignUp() {
    console.log('Sign Up with:', this.signupUsername, this.signupEmail, this.signupPassword);
  }

  toggleForm(isLoginForm: boolean) {
    this.isLogin = isLoginForm;
  }
}
