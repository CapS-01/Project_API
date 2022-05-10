import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyBW6QlyLZ3P_t4CAmSVi_RuI1fIAUZqolI",
    authDomain: "antonin-f.firebaseapp.com",
    projectId: "antonin-f",
    storageBucket: "antonin-f.appspot.com",
    messagingSenderId: "494736240741",
    appId: "1:494736240741:web:fbdccf0a1c5e0b19db968c",
    measurementId: "G-4H9TEBE36C"
  };

class Firebase {
    constructor() {
        app.initializeApp(config)
    }
}
export default Firebase;