import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user;

  public redirectUrl: string;

  get isLoggedIn(): boolean {
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
