import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user;

  public redirectUrl: string;

  get isLoggedIn(): boolean {
    console.log('isLoggedIn', this.user);
    return Boolean(this.user);
  }

  getUser () {
    return this.user;
  }

  login(user) {
    this.user = user;
  }

  logout(): void {
    this.user = null;
  }
}
