import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../auth.config';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginDialogComponent } from './login/login-dialog/login-dialog.component';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
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
}
