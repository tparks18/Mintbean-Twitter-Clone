import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfBAFHtSwUOSdFTeZVsQFRBBlx7-oshT4",
  authDomain: "twitter-clone-3-68027.firebaseapp.com",
  projectId: "twitter-clone-3-68027",
  storageBucket: "twitter-clone-3-68027.appspot.com",
  messagingSenderId: "202860564223",
  appId: "1:202860564223:web:ff2c9ae2379581c238c6ca",
  measurementId: "G-BYR95F8SYL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
