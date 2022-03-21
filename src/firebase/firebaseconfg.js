import firebase from 'firebase'
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAT_4qodu0ANh8fDlwIVykTshwrzvhGu1M",
    authDomain: "twitter-auth-fa196.firebaseapp.com",
    projectId: "twitter-auth-fa196",
    storageBucket: "twitter-auth-fa196.appspot.com",
    messagingSenderId: "149490810636",
    appId: "1:149490810636:web:ecba1b168fa35687f05329"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()
  
  export { auth }