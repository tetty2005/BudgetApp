import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../Models/UserModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) {
  }

  onSignedIn (firebaseUser) {
    if (this.authService.isLoggedIn) {
      return;
    }

    const user = new User(firebaseUser);

    this.authService.login(user);

    this.userService.init(user).then(() => {
      this.router.navigate([this.authService.redirectUrl || '/']);
    });
  }

  ngOnInit() {
  }
}
