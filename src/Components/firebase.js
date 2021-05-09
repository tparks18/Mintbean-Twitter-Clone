import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN-WaPNHVtKqkrSgIlRv-Sn3SRWOPYo_o",
  authDomain: "mintbeantwitterclone.firebaseapp.com",
  projectId: "mintbeantwitterclone",
  storageBucket: "mintbeantwitterclone.appspot.com",
  messagingSenderId: "801105280300",
  appId: "1:801105280300:web:46c63d34c0a4b8b8b04089",
  measurementId: "G-96EB27EHJG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
