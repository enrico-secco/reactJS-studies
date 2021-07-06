import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth' /* Habilitar email/password */

let firebaseConfig = {
    apiKey: "AIzaSyDaHtMqftvC5WgwJJlnle3RxXveyR4nH8M",
    authDomain: "reactapp-7e501.firebaseapp.com",
    databaseURL: "https://reactapp-7e501.firebaseio.com",
    projectId: "reactapp-7e501",
    storageBucket: "reactapp-7e501.appspot.com",
    messagingSenderId: "517620166494",
    appId: "1:517620166494:web:ccbf5c5f224aea885ae9cf",
    measurementId: "G-HNFWTKG3NW"
  };

  // Initialize Firebase
  if (!firebase.apps.length){ //pra não ter duas conexões.
  firebase.initializeApp(firebaseConfig);
  }

export default firebase;