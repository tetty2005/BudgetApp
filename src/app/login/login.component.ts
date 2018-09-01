import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor (private authService: AuthService, private router: Router) {
  }

  onSignedIn(user) {
    let redirectUrl = this.authService.redirectUrl || '/';
    console.log('onSignedIn', redirectUrl, user);

    this.authService.login(user);
    this.router.navigate([redirectUrl]);
  }

  ngOnInit() {
  }
}
