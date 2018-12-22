import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FirebaseHelper } from '../firebase-helper';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit {
  @Output() signedIn = new EventEmitter<boolean>();

  constructor() {
    FirebaseHelper.init('#firebaseui-auth-container', (user) => {
      this.signedIn.emit(user);
    });
  }

  ngOnInit() {
  }
}
