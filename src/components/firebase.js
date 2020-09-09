import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAylxPuUa5TrRAd1U5Tl4VuXj1uQVyhtNA",
    authDomain: "clone-f759c.firebaseapp.com",
    databaseURL: "https://clone-f759c.firebaseio.com",
    projectId: "clone-f759c",
    storageBucket: "clone-f759c.appspot.com",
    messagingSenderId: "849485020692",
    appId: "1:849485020692:web:5de1defcb3673044a67101",
    measurementId: "G-0W70L2ZWLH"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };