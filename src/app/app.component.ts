import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { FirebaseHelper } from './firebase-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private authService: AuthService,
              private router: Router) {
    iconRegistry.addSvgIcon(
      'list',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/list.svg'));

    iconRegistry.addSvgIcon(
      'list_add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/list_add.svg'));

    iconRegistry.addSvgIcon(
      'pie_chart',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/pie_chart.svg'));

    iconRegistry.addSvgIcon(
      'bar_chart',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/bar_chart.svg'));

    iconRegistry.addSvgIcon(
      'money-bag2',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/money-bag2.svg'));
  }

  ngOnInit() {
  }

  onLogout() {
    FirebaseHelper.signOut();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
