import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKWL4UhafeGgiDp2M2fozn1JHzaEkJ7i8",
  authDomain: "signal-clone-defri.firebaseapp.com",
  projectId: "signal-clone-defri",
  storageBucket: "signal-clone-defri.appspot.com",
  messagingSenderId: "52581640786",
  appId: "1:52581640786:web:1e7191dca21f5bd2af4d8b"
};

let app;

if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };