import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../../auth.config';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private oauthService: OAuthService,
              private dialog: MatDialog) {
    this.configureWithNewConfigApi();
  }


  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  openDialog(): void {
    let dialog = this.dialog.open(LoginDialogComponent);

    dialog.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  openMain() {
    console.log('main page is clicked');
  }

  ngOnInit() {
  }
}
