import firebase from "firebase";
import "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzeQWBRjkqFLYNZF7lZJ3aH1zdEa9sW7s",
  authDomain: "fortport-331be.firebaseapp.com",
  projectId: "fortport-331be",
  storageBucket: "fortport-331be.appspot.com",
  messagingSenderId: "1078216652215",
  appId: "1:1078216652215:web:6b4313d9c6390ee3262432",
  measurementId: "G-4DPVJQ9MQR"
};

const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
const gpro = new firebase.auth.GoogleAuthProvider();
const timestamps = firebase.firestore.FieldValue.serverTimestamp;
const firestorage = firebase.storage();
const auth  = fire.auth();


export {timestamps,firestorage,gpro,auth};
export default db;

