import {FirebaseHelper} from '../firebase-helper';

export class FirebaseService {
  getDb () {
    return FirebaseHelper.getApp().firestore();
  }
}
