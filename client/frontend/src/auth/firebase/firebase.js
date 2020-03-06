import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTJWyhqA-G86kc1nYHNqsjloEfNzVKdiw",
  authDomain: "dpduk-developer-gavin-dhaliwal.firebaseapp.com",
  databaseURL: "https://dpduk-developer-gavin-dhaliwal.firebaseio.com",
  projectId: "dpduk-developer-gavin-dhaliwal",
  storageBucket: "dpduk-developer-gavin-dhaliwal.appspot.com",
  messagingSenderId: "732581898159",
  appId: "1:732581898159:web:48e549f7fd75392194315a",
  measurementId: "G-Q3BBN75Q59"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
