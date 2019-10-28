import app from 'firebase/app';
import 'firebase/auth';

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
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.provider.addScope('profile');

    this.auth = app.auth();
  }

  async signInWithPopup() {
    this.userInfo = await this.auth.signInWithPopup(this.provider);
    console.log({ userInfo: this.userInfo });
  }
}

export default Firebase;
