import * as firebase from 'firebase'; // /app
import * as firebaseui from 'firebaseui';

class FirebaseHelperClass {

  app;
  ui;
  uiContainer;
  signInSuccessCallback;

  constructor() {
    // this.init();
  }

  init(uiContainer, signInSuccessCallback) {
    console.log('!!!!!!! init', this.app);
    this.uiContainer = uiContainer;
    this.signInSuccessCallback = signInSuccessCallback;

    if (!this.app) {
      this.initApp();
      this.initUI();
    }
  }

  initApp() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAP63i-e6Y19HNQgOparBZgZoiZC0ZP_cU",
      authDomain: "budgetapp-1526733843256.firebaseapp.com",
      databaseURL: "https://budgetapp-1526733843256.firebaseio.com",
      projectId: "budgetapp-1526733843256",
      storageBucket: "budgetapp-1526733843256.appspot.com",
      messagingSenderId: "1096703023974"
    };
    this.app = firebase.initializeApp(config);
  }

  initUI() {
    // Initialize the FirebaseUI Widget using Firebase.
    this.ui = new firebaseui.auth.AuthUI(this.app.auth());

    // Disable auto-sign in.
    this.ui.disableAutoSignIn();

    // Listen to change in auth state so it displays the correct UI for when the user is signed in or not.
    const _this = this;
    this.app.auth().onAuthStateChanged(function (user) {
      console.log('onAuthStateChanged', user);

      if (!user) {
        _this.start(_this.uiContainer);
      } else {
        _this.signInSuccessCallback(user);
      }
    });
  }

  getUiConfig() {
    const _this = this;

    return {
      callbacks: {
        // Called when the user has been successfully signed in.
        'signInSuccessWithAuthResult': function (authResult, redirectUrl) {
          console.log('signInSuccessWithAuthResult', authResult, redirectUrl);

          if (authResult.user) {
            console.log('show user', authResult.user);
            _this.signInSuccessCallback(authResult.user);
          }

          // Do not redirect.
          return false;
        }
      },
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      tosUrl: '/terms-of-service',
      privacyPolicyUrl: '/privacy-policy'
    };
  }

  start(container = this.uiContainer) {
    this.ui.start(container, this.getUiConfig());
  }

  signOut() {
    return this.app.auth().signOut();
  }

  getDB() {
    return this.app.firestore();
  }

}

export const FirebaseHelper = new FirebaseHelperClass();
