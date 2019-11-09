import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.analytics = new app.analytics();
    this.provider = new app.auth.GoogleAuthProvider();
    this.provider.addScope('profile');

    this.auth = app.auth();
    this.doSignout = this.doSignout.bind(this);
    this.signInWithPopup = this.signInWithPopup.bind(this);

    app.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.userInfo = user;
      } else {
        this.userInfo = undefined;
      }
    });
  }

  async signInWithPopup() {
    this.userInfo = await this.auth.signInWithPopup(this.provider);
  }

  async doSignout() {
    this.auth.signOut();
    this.userInfo = undefined;
  }
}

export default Firebase;
