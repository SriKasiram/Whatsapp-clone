// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBhRUD0iEgHR6W3tCfkkXZnIvIzRDbH0Sg",
  authDomain: "whatsapp-web-clone-33.firebaseapp.com",
  //databaseURL: "https://whatsapp-web-clone-33.firebaseio.com",
  projectId: "whatsapp-web-clone-33",
  storageBucket: "whatsapp-web-clone-33.appspot.com",
  messagingSenderId: "991965896600",
  appId: "1:991965896600:web:369bce068f2102630b95ed",
  measurementId: "G-TM1S8ZC1W4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
